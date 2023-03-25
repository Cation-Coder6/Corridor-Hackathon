import React from 'react'

function Header() {
  return (
    <div className='flex justify-between m-4 text-3xl'>
        <div className='m-4'> Corridor Platforms </div>
        <div className='flex'>
            <div className='m-4'>
                Home
            </div>
            <div className='m-4'>
                Upload File
            </div>
        </div>
    </div>
  )
}

export default Header