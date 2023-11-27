import Image from 'next/image'
import React from 'react'

function Homepage() {
  return (
    <section>
      <div className='text-center py-1 mb-8'>
        <h3 className='uppercase text-grey-500 font-semibold leading-4'>
          Cek Testimoni
        </h3>
        <h2 className='text-primary font-bold text-4xl italic'>
          Kami
        </h2>
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
        <div className='bg-gray-300 p-4 rounded-lg text-center'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Compass Retrograde Black N White</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href=''>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Ventela Low White</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href=''>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Nike Dunk Panda</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href=''>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Compass Retrograde Black N White</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href=''>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Compass Retrograde Black N White</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href=''>
          <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
            Lihat Testi
          </button>
          </a>
        </div>
        <div className='bg-gray-300 p-4 rounded-lg text-center'>
          <img src='/Sepatuhero.jpg'/>
          <h4 className='font-semibold text-xl my-2'>Compass Retrograde Black N White</h4>
          <p className='text-grey-500 text-sm'>Deep Cleaning</p>
          <a href=''>
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