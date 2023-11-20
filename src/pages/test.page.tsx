import Image from 'next/image'
import Border from '../../Frame.png'
import {clsx} from "clsx";
export default function Home() {
  return (
    <main className={clsx('flex-col flex justify-center h-full w-full items-stretch', 'roboto.className')}>
      <div className={'flex w-full h-[45rem]'}>
        <div className={'w-full flex relative items-center justify-center'}>
          <Image src={Border} alt={'border'} fill/>
          <div className={'max-w-[38rem]'}>
            <div className={'width-fit bg-[#E7E8E3] px-[0.75rem] py-[0.25rem] rounded-3xl mb-[1.25rem] w-fit'}>
              Find your dream place
            </div>
            <h1 className={'font-normal text-6xl text-Roboto mb-[1.5rem]'}>
              Find house for your family in minutes
            </h1>
            <h2 className={'text-[1.5rem] text-text-grey'}>
              Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.
            </h2>
          </div>
        </div>
        <div className={'w-full flex items-center justify-center'}>
          Right
        </div>
      </div>
    </main>
  )
}
