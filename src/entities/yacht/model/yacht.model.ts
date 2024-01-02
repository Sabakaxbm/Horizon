export type IYacht = {
  title: string
  length: string
  img: string
  info: IYachtInfoPreview
}

export type IYachtInfoPreview = {
  [key: string]: any
  guestDay: number
  guestSleeping: number
  maxSpeed: string
  cruisingSpeed: string
  crew: number
  video: null | boolean
  price: string
}
