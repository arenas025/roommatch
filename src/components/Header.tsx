import logo from '../assets/logo.png'
import {useState} from 'react'
import pkg from 'react-icons/ai/index'

const Header = () => {

  const { AiOutlineMenu } = pkg
  const [ isActive, setIsActive] = useState<boolean>(false)

return(
  <div className="bg-slate-200 w-screen h-14 flex align-middle justify-between items-center pl-6 pr-6">
    <img src={logo} className="w-10 h-8"/>
    <AiOutlineMenu className='sm:hidden' onClick={()=>{
      setIsActive(true)
    }} size={25}/>
  </div>
)
}

export default Header

