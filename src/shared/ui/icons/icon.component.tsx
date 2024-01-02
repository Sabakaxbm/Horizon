import dynamic from 'next/dynamic'

const Logo = dynamic(() => import('@public/assets/icons/Logo.svg'))
const SelectArrow = dynamic(() => import('@public/assets/icons/Select-arrow.svg'))
const instagram = dynamic(() => import('@public/assets/icons/instagram-icon.svg'))
const telegram = dynamic(() => import('@public/assets/icons/telegram-icon.svg'))
const whatsapp = dynamic(() => import('@public/assets/icons/whatsapp-icon.svg'))
const filter = dynamic(() => import('@public/assets/icons/filter.svg'))
const youtube = dynamic(() => import('@public/assets/icons/youtube-icon.svg'))

const iconTypes = {
  Logo,
  SelectArrow,
  instagram,
  telegram,
  whatsapp,
  filter,
  youtube,
}

export type IconsTypes = keyof typeof iconTypes

export interface IIconComponentProperties extends React.SVGAttributes<SVGElement> {
  name: IconsTypes
}

export const IconComponent = ({ name, ...props }: IIconComponentProperties) => {
  const Icon = iconTypes[name]
  return <Icon {...props} />
}
