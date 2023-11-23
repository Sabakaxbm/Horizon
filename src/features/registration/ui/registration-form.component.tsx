import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonComponent } from '@shared/ui/button'
import { InputComponent } from '@shared/ui/input'
import { TextFieldComponent } from '@shared/ui/text-field'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const validationSchema = z.object({
  name: z.string().min(1, { message: 'Required name' }),
  email: z.string().email().min(1, 'Required email'),
  phone: z.string().min(1, 'Required phone'),
  yachtType: z.string().min(1, { message: 'Required yacht' }),
  days: z.number().positive().min(1, 'Required days').max(10, 'max 10 days'),
  guests: z.number().min(1, { message: 'Required guest' }),
  budget: z.number().min(1, { message: 'Required budget' }),
  additionalInfo: z.string().max(200, { message: 'Max 200 symb' }).optional(),
})

type ValidationSchema = z.infer<typeof validationSchema>

interface RegistrationFormProperties {
  isMobile?: boolean
}
const styleInputDiv = 'w-full lg:flex lg:gap-3'
export const RegistrationFormComponent = ({}: RegistrationFormProperties) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data)

  return (
    <div
      className={'h-full w-full bg-page-bg p-2 font-montserrat lg:bg-transparent lg:p-0'}
    >
      <form
        className={'rounded bg-white p-3 lg:px-8 lg:py-5'}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div
          className={
            'hidden items-center justify-center pb-4 text-[1.5rem] font-bold lg:visible lg:flex'
          }
        >
          <h3 className={'text-active-link'}>REQUEST A PACKAGE</h3>
        </div>
        <div className={styleInputDiv}>
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
            label={'E-mail'}
            id={'Email'}
            type={'email'}
            {...register('email')}
            errors={errors?.email}
          />
        </div>
        <div className={styleInputDiv}>
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
        </div>
        <div className={styleInputDiv}>
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
          <InputComponent
            required
            label={'Number of Guests'}
            id={'Guests'}
            type={'number'}
            {...register('guests', {
              setValueAs: Number,
            })}
            errors={errors?.guests}
          />
        </div>
        <InputComponent
          required
          label={'Budget (THB)'}
          id={'Budget'}
          type={'number'}
          {...register('budget', {
            setValueAs: Number,
          })}
          errors={errors?.budget}
        />
        <Controller
          name="additionalInfo"
          control={control}
          render={({ field }) => (
            <TextFieldComponent
              className={'h-[5.125rem] max-h-[5.125rem]'}
              id={'additionalInfo'}
              {...field}
              errors={errors?.additionalInfo}
            />
          )}
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
