import { YachtCardComponent } from '@entities/yacht'

const mockYacht = {
  title: 'TITANIA 72M',
  length: '236 ft 3 in (72 m)',
  img: '123',
  info: {
    guestDay: 14,
    guestSleeping: 14,
    maxSpeed: '16 Knots',
    cruisingSpeed: '14 Knots',
    crew: 20,
    video: null,
    price: '13 253 000',
  },
}
export const ShipListComponent = () => {
  const mock = 25
  return (
    <div className={'col-span-3 h-full w-full lg:pl-5'}>
      <h4 className={'mb-3 font-montserrat font-semibold text-sub-text'}>
        Found {mock} yachts
      </h4>
      <section className={'grid grid-cols-1 gap-5 lg:grid-cols-3'}>
        <YachtCardComponent yacht={mockYacht} />
        <YachtCardComponent yacht={mockYacht} />
        <YachtCardComponent yacht={mockYacht} />
        <YachtCardComponent yacht={mockYacht} />
      </section>
    </div>
  )
}
