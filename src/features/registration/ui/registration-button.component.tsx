import { IconComponent } from '@shared/ui/icons'

interface RegistrationButtonProperties {
  onClick: () => void
}
export const RegistrationButtonComponent = ({
  onClick,
}: RegistrationButtonProperties) => {
  return (
    <section>
      <div
        className={
          'flex cursor-pointer items-center justify-center gap-5 bg-white px-page py-5 text-[1.5rem] font-bold'
        }
        onClick={onClick}
      >
        <h3 className={'text-active-link'}>REQUEST A PACKAGE</h3>
        <IconComponent className={'h-4 w-4 fill-dark-blue'} name={'SelectArrow'} />
      </div>
    </section>
  )
}
