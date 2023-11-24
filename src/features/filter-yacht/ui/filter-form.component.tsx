import { useSelect } from '@shared/lib'
import { optionsGuest, optionsTypes } from '@shared/lib/constants'
import { ButtonComponent } from '@shared/ui/button'
import { SelectFormComponent } from '@shared/ui/select'

export const FilterFormComponent = () => {
  const { selected: selectedType, handleElement: handleType } = useSelect(optionsTypes)
  const { selected: selectedCrew, handleElement: handleCrew } = useSelect(optionsTypes)
  const { selected: selectedGuest, handleElement: handleGuest } = useSelect(optionsGuest)
  const { selected: selectedLength, handleElement: handleLength } =
    useSelect(optionsGuest)
  const { selected: selectedPrice, handleElement: handlePrice } = useSelect(optionsGuest)
  return (
    <div
      className={
        'mb-6 flex flex-col items-center justify-between bg-white font-montserrat font-medium'
      }
    >
      <div
        className={
          'flex w-full flex-col items-center justify-between gap-3 p-6 font-montserrat font-medium'
        }
      >
        <SelectFormComponent
          label={'Type'}
          options={optionsTypes}
          selected={selectedType || null}
          placeholder={'Motor'}
          onChange={handleType}
        />
        <SelectFormComponent
          label={'Crew'}
          options={optionsTypes}
          selected={selectedCrew || null}
          placeholder={'Crew'}
          onChange={handleCrew}
        />
        <SelectFormComponent
          label={'Number of Guests'}
          options={optionsGuest}
          selected={selectedGuest || null}
          onChange={handleGuest}
        />
        <SelectFormComponent
          label={'Length'}
          options={optionsGuest}
          selected={selectedLength || null}
          onChange={handleLength}
        />
        <SelectFormComponent
          label={'Price range'}
          options={optionsGuest}
          selected={selectedPrice || null}
          onChange={handlePrice}
        />
      </div>
      <ButtonComponent className={'w-full rounded-none p-4'}>Search</ButtonComponent>
    </div>
  )
}
