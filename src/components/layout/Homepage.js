import Image from 'next/image'
import React from 'react'
import SectionHeader from './SectionHeader'

function Homepage() {
  return (
    <section>
      <div className='text-center py-1 mb-8'>
        <SectionHeader 
          subHeader={'Cek Testimoni'}
          mainHeader={'Kami'}
        />
      </div>

      <div className='h-full left-0 right-0 w-full'>
        <div className='absolute left-0 -bottom-[35px] text-left -z-10'>
          <Image 
            src={'/Sepatuhero.jpg'}
            width={480}
            height={680}
            alt={'Snickers'}
          />
        </div>
        <div className='absolute -bottom-[75px] right-0 -z-10'>
          <Image 
            src={'/Sepatuhero2.jpg'}
            width={300}
            height={400}
            alt={'Sepatu 2'}
          />
        </div>
      </div>

      {/*Testi*/}
      <div className='grid grid-cols-3 gap-10 mt-[50px]'>
        <div className='bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Compass Retrograde Black & White</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href='https://www.instagram.com/p/CxSIi8DSsyJ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Ventela Low White</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href='https://www.instagram.com/p/CxqPbtOSxOu/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Nike Dunk Panda</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href='https://www.instagram.com/p/CxYXiZxSBEq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Converse Chuck Taylor 70s</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href='https://www.instagram.com/p/CyGa-9rS5do/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Compass Velocity</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href='https://www.instagram.com/p/CygeLUASB7S/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black-75 transition-all'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Converse Chuck Taylor Low</h4>
          <p className='text-grey-500 text-sm'>Fast Cleaning</p>
          <a href='https://www.instagram.com/p/CxQoMcOyegH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Homepage