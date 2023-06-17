import logo from '../assets/logo.png'
import {useState} from 'react'
import pkg from 'react-icons/ai/index'
import { LateralMenu } from './LateralMenu'

const Header = () => {

  const { AiOutlineMenu } = pkg
  const [ isActive, setIsActive] = useState<boolean>(false)

return(
  <div className="bg-slate-200 w-full h-14 flex align-middle justify-between items-center pl-6 pr-6">
    <div className='flex items-center'>
      <a href="/">
      <img src={logo} className="w-10 h-8"/>
      </a>
      <p>RoomMatch</p>
    </div>
    <AiOutlineMenu className='sm:hidden' onClick={()=>{
      setIsActive(true)
      console.log('click')
    }} size={25}/>
    {isActive && <LateralMenu setClose={setIsActive}/>}
  </div>
)
}

export default Header

