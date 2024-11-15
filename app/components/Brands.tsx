import Image from 'next/image'
import React from 'react'

const brands = () => {
  return (
    <div className='brands flex mt-[37.68px] justify-center gap-[8px]'>
      <div className='flex w-[194px] h-[32px] gap-[8px] justify-center items-center '>
      <Image src="/ShellsIcon.svg" width={30} height={32}/>
      <div className='brands text-[24px] text-custom-gray font-bold' >SHELLS</div>
      </div>

      <div className='flex w-[194px] h-[32px] gap-[8px] justify-center items-center '>
      <Image src="/SmartFinderIcon.svg" width={30} height={32}/>
      <div className='brands text-[24px] text-custom-gray font-bold' >SmartFinder</div>
      </div>

      <div className='flex w-[194px] h-[32px] gap-[8px] justify-center items-center '>
      <Image src="/ZommerIcon.svg" width={30} height={32}/>
      <div className='brands text-[24px] text-custom-gray font-bold' >Zoomerr</div>
      </div>

      <div className='flex w-[194px] h-[32px] gap-[8px] justify-center items-center '>
      <Image src="/ArtVenueIcon.svg" width={30} height={32}/>
<div
      className='brands text-[24px] text-custom-gray font-bold'
    >
      ArtVenue
    </div>
      </div>

      <div className='flex w-[194px] h-[32px] gap-[8px] justify-center items-center '>
      <Image src="/KonstrastrIcon.svg" width={30} height={32}/>
      <div className='brands text-[24px] text-custom-gray font-bold' >kontrastr</div>
      </div>

    


      

    </div>
  )
}

export default brands
