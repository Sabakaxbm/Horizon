import { clsx } from 'clsx'
import type { TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import type { FieldError } from 'react-hook-form'

interface TextFieldProperties extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errors?: FieldError | undefined
}
// eslint-disable-next-line react/display-name
export const TextFieldComponent = forwardRef<HTMLTextAreaElement, TextFieldProperties>(
  (props: TextFieldProperties) => {
    const { errors, className } = props

    const style = clsx(
      'mt-2 w-full flex-1 appearance-none rounded-lg border border-input-border bg-input-bg p-4 text-xs',
      'font-normal text-dark-blue shadow-sm placeholder:text-gray-400 focus:border-transparent',
      'focus:outline-none focus:ring-1 ',
      'resize-none',
      errors?.message ? 'border-error focus:ring-error' : 'focus:ring-dark-blue',
      className
    )
    return (
      <div className="relative my-2 w-full text-sm font-medium text-dark-blue">
        <textarea {...props} className={style} />
        {errors?.message && (
          <p className={'pt-1 text-xs font-light italic text-error'}>
            *{errors?.message}
          </p>
        )}
      </div>
    )
  }
)
