import type { IconType } from 'react-icons'

interface LateralMenuItemInterface {
  name:string
  route:string
  Icon: IconType
  backgroundColor: string
}

export const LateralMenuItem = ({name,route,backgroundColor,Icon}:LateralMenuItemInterface) => {
  return (
    <a className='w-4/5' href={`/${route}`}>
    <div className={`p-2 items-center relative rounded-tl-lg rounded-bl-lg bg-${backgroundColor} flex`}>
      <p className='text-white'>{name}</p>
      <div className='w-5 h-5 rounded-md bg-white absolute right-3 flex items-center justify-center'>
      <Icon color={backgroundColor} />
      </div>
    </div>
    </a>
  )
}
