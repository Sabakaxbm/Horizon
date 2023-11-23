import { IconComponent } from '@shared/ui/icons'
import { OptionComponent } from '@shared/ui/select/option.component'
import { clsx } from 'clsx'
import type { MouseEventHandler } from 'react'
import { useEffect, useRef, useState } from 'react'

import type { Option } from './type'

type SelectProperties = {
  selected?: Option | null
  options: Option[]
  placeholder?: string
  status?: 'default' | 'invalid'
  onChange?: (selected: Option['value']) => void
  onClose?: () => void
  className?: string
}
export const SelectComponent = (props: SelectProperties) => {
  const { options, placeholder, selected, onChange, onClose } = props
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
    <div className={'relative w-fit font-montserrat text-sm'}>
      <div
        ref={rootReference}
        onClick={handlePlaceHolderClick}
        className={'mt-auto inline-flex cursor-pointer select-none flex-col'}
      >
        <div
          className={clsx(
            'flex items-center justify-center gap-2 rounded-md border p-2',
            isOpen
              ? 'mb-[1px] rounded-b-none border-b-0 border-active-link'
              : 'border-dark-blue'
          )}
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
            className={
              'absolute top-6 z-10 w-full rounded-md rounded-t-none border border-t-0 border-active-link bg-white p-2 py-1 leading-4'
            }
          >
            {options.map((option) => (
              <OptionComponent
                key={option.value}
                option={option}
                onClick={handleOptionClick}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
