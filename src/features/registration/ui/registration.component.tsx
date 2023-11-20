import { useState } from 'react'

import { RegistrationButtonComponent } from './registration-button.component'
import { RegistrationFormComponent } from './registration-form.component'

export const RegistrationComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOptionClick = () => {
    setIsOpen((previousState) => !previousState)
  }

  return (
    <div>
      <RegistrationButtonComponent onClick={handleOptionClick} />
      {isOpen && <RegistrationFormComponent />}
    </div>
  )
}
