

import BanansLogo from '../../assets/logo.webp'

const TopBar = () => {
  return (
    <div className='
    bg-[#0b0e119c]
    w-full h-20
    flex items-center
    justify-between
    px-10
    
    '>

      <div className='
      flex items-center
      gap-2
      cursor-pointer

      
      '>

      <img className='
      max-w-10 max-h-10
      'src={BanansLogo} alt="" />

        <span className='
        text-[#FCD535]
        font-medium
        tracking-widest
        text-xl

        '>
          BANANS
        </span>

      </div>

      <div className='
      flex 
      items-center
      gap-4
      '>

        


        
      </div>
      
    </div>
  )
}

export default TopBar
