import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import type { FieldError } from 'react-hook-form'

interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errors?: FieldError | undefined
}

export const InputComponent = forwardRef<HTMLInputElement, InputProperties>(
  (props: InputProperties, reference) => {
    const { label, id, required, errors } = props

    const style = clsx(
      'mt-2 w-full flex-1 appearance-none rounded-lg border border-input-border bg-input-bg px-4 py-2 text-xs',
      'font-normal text-dark-blue shadow-sm placeholder:text-gray-400 focus:border-transparent',
      'focus:outline-none focus:ring-1 ',
      errors?.message ? 'border-error focus:ring-error' : 'focus:ring-dark-blue'
    )

    return (
      <div className="relative my-2 font-montserrat text-sm font-medium text-dark-blue">
        <label htmlFor={id} className="text-gray-700">
          {required && <span className={'text-active-link'}>*</span>}
          {label}
        </label>
        <input className={style} {...props} ref={reference} />
        {errors?.message && (
          <p className={'pt-1 text-xs font-light italic text-error'}>
            *{errors?.message}
          </p>
        )}
      </div>
    )
  }
)
