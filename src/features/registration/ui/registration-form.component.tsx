import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonComponent } from '@shared/ui/button'
import { InputComponent } from '@shared/ui/input'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// type IFormData = {
//   name: string
//   email: string
//   phone: string
//   yachtType: string
//   days: number | null
//   guests: number | null
//   budget: number | null
//   additionalInfo: string
// }

// const initialValue: IFormData = {
//   name: '',
//   email: '',
//   phone: '',
//   yachtType: '',
//   days: null,
//   guests: null,
//   budget: null,
//   additionalInfo: '',
// }

const validationSchema = z.object({
  name: z.string().min(1, { message: 'Required name' }),
  email: z.string().email().min(1, 'Required email'),
  phone: z.string().min(1, 'Required phone'),
  yachtType: z.string().min(1, { message: 'Required yacht' }),
  days: z.number().positive().min(1, 'Required days').max(10, 'Required phone'),
  guests: z.number().min(1, { message: 'Required guest' }),
  budget: z.number().min(1, { message: 'Required budget' }),
  additionalInfo: z.string().max(200),
})

type ValidationSchema = z.infer<typeof validationSchema>

interface RegistrationFormProperties {}
export const RegistrationFormComponent = ({}: RegistrationFormProperties) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data)

  console.log(typeof getValues('days'))

  return (
    <div className={'h-full w-full bg-page-bg p-2'}>
      <form
        className={'rounded bg-white p-3'}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <InputComponent
          {...register('name')}
          required
          label={'Name'}
          id={'Name'}
          type={'text'}
          errors={errors?.name}
        />
        <InputComponent
          required
          label={'Email'}
          id={'Email'}
          type={'email'}
          {...register('email')}
          errors={errors?.email}
        />
        <InputComponent
          required
          label={'Phone'}
          id={'Phone'}
          type={'number'}
          {...register('phone')}
          errors={errors?.phone}
        />
        <InputComponent
          required
          label={'Yacht Type'}
          id={'Yacht Type'}
          type={'text'}
          {...register('yachtType')}
          errors={errors?.yachtType}
        />
        <InputComponent
          required
          label={'Number of Days'}
          id={'Number of Days'}
          type={'number'}
          {...register('days', {
            setValueAs: Number,
          })}
          errors={errors?.days}
        />
        <ButtonComponent
          className={
            'mt-4 w-full py-4 text-[1.125rem] hover:shadow-active-button active:bg-dark-blue'
          }
          type="submit"
        >
          Submit
        </ButtonComponent>
      </form>
    </div>
  )
}
