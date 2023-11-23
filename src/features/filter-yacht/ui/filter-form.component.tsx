import { SelectFormComponent } from '@shared/ui/select'
import { useState } from 'react'

const optionsTypes = [
  { title: 'Motor', value: 'motor' },
  { title: 'Diesel', value: 'diesel' },
]
export const FilterFormComponent = () => {
  const [type, setType] = useState<string>('')

  const handleType = (value: string) => {
    setType(value)
  }

  const selectedType = optionsTypes.find((item) => item.value === type)

  return (
    <div
      className={
        'mb-6 flex items-center justify-between gap-2 bg-white p-6 font-montserrat font-medium'
      }
    >
      <SelectFormComponent
        label={'Type'}
        options={optionsTypes}
        selected={selectedType || null}
        placeholder={'Motor'}
        onChange={handleType}
      />
    </div>
  )
}
