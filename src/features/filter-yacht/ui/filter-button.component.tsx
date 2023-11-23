import { IconComponent } from '@shared/ui/icons'

export const FilterButtonComponent = () => {
  return (
    <div
      className={
        'mb-6 flex cursor-pointer items-center justify-between gap-2 bg-white p-6 font-montserrat font-medium'
      }
    >
      <div className={'flex items-center gap-2'}>
        <IconComponent name={'filter'} className={'h-4 w-4'} />
        <span>Filter</span>
      </div>
      <IconComponent name={'SelectArrow'} className={'h-4 w-4 fill-dark-blue'} />
    </div>
  )
}
