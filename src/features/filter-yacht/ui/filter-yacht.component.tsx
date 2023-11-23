import { FilterButtonComponent } from '@features/filter-yacht/ui/filter-button.component'
import { FilterFormComponent } from '@features/filter-yacht/ui/filter-form.component'
import { FilterHeaderComponent } from '@features/filter-yacht/ui/filter-header.component'

export const FilterYachtComponent = () => {
  return (
    <div className={'max-w-[20.4375rem] lg:mt-[-3.875rem]'}>
      <FilterYachtComponent.Header />
      <FilterYachtComponent.Button />
      <FilterYachtComponent.Form />
    </div>
  )
}

FilterYachtComponent.Header = FilterHeaderComponent
FilterYachtComponent.Button = FilterButtonComponent
FilterYachtComponent.Form = FilterFormComponent
