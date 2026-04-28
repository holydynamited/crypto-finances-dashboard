import React from 'react'
import type { ReactNode } from 'react'

type Props = {
children : ReactNode;

}

const Layout = ({children}:Props) => {
  return (
  <div className=' min-h-screen bg-[#1d2228]'>
    <div className=' max-w-6xl  p-0 '>
      {children}
    </div>
    </div>
  )
}

export default Layout
