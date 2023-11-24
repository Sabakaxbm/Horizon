import type { Option } from '@shared/lib'
import { IconComponent } from '@shared/ui/icons'
import { OptionComponent } from '@shared/ui/select/option.component'
import { clsx } from 'clsx'
import type { MouseEventHandler } from 'react'
import { useEffect, useRef, useState } from 'react'

type SelectFormProperties = {
  selected?: Option | null
  options: Option[]
  placeholder?: string
  status?: 'default' | 'invalid'
  onChange?: (selected: Option['value']) => void
  onClose?: () => void
  className?: string
  openDown?: boolean
  label?: string
}
export const SelectFormComponent = (props: SelectFormProperties) => {
  const { options, placeholder, selected, className, onChange, onClose, label } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const rootReference = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootReference.current?.contains(target)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isOpen && onClose?.()
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [isOpen, onClose])

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false)
    onChange?.(value)
  }
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((previous) => !previous)
  }

  return (
    <div className={'w-full font-montserrat'}>
      <div className={'mb-3 text-[1rem] font-medium text-dark-blue'}>{label}</div>
      <div
        ref={rootReference}
        className={'relative mt-auto inline-flex w-full select-none flex-col'}
      >
        <div className={clsx('text-[0.75rem] text-dark-blue', className)}>
          <div
            className={clsx(
              'flex cursor-pointer items-center justify-between gap-2 rounded-md border bg-input-bg px-5 py-3',
              isOpen ? 'rounded-b-none border-b-0' : ''
            )}
            onClick={handlePlaceHolderClick}
          >
            <div className={'font-medium text-dark-blue'}>
              {selected?.title || placeholder}
            </div>
            <IconComponent
              name={'SelectArrow'}
              className={clsx(
                'h-3.5 w-3.5 ',
                isOpen ? 'rotate-180 fill-active-link' : 'fill-dark-blue'
              )}
            />
          </div>
          {isOpen && (
            <ul
              className={clsx(
                'z-10 w-full rounded-md rounded-t-none border border-t-0 bg-input-bg leading-4',
                'absolute -mt-2 px-5 pb-3'
              )}
            >
              {options.map((option) => (
                <OptionComponent
                  selected={selected}
                  key={option.value}
                  option={option}
                  onClick={handleOptionClick}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
