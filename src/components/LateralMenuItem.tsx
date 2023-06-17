import type { IconType } from 'react-icons'

interface LateralMenuItemInterface {
  name:string
  route:string
  Icon: IconType
}

export const LateralMenuItem = ({name,route,Icon}:LateralMenuItemInterface) => {
  return (
    <a className='w-4/5' href={`/${route}`}>
    <div className=' p-2 items-center relative rounded-tl-lg rounded-bl-lg bg-red-logo flex'>
      <p className='text-white'>{name}</p>
      <div className='w-5 h-5 rounded-md bg-white absolute right-3 flex items-center justify-center'>
      <Icon color='#d6587f'/>
      </div>
    </div>
    </a>
  )
}
