import { FilterButtonComponent } from '@features/filter-yacht/ui/filter-button.component'
import { FilterFormComponent } from '@features/filter-yacht/ui/filter-form.component'
import { FilterHeaderComponent } from '@features/filter-yacht/ui/filter-header.component'
import { useState } from 'react'

export const FilterYachtComponent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return (
    <div className={'lg:mt-[-3.875rem] lg:max-w-[20.4375rem]'}>
      <FilterYachtComponent.Header />
      <FilterButtonComponent setIsVisible={setIsVisible} />
      <FilterFormComponent isVisible={isVisible} />
    </div>
  )
}

FilterYachtComponent.Header = FilterHeaderComponent
