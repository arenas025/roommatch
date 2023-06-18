import logo from '../assets/logo.png'
import {useState} from 'react'
import pkg from 'react-icons/ai/index'
import { LateralMenu } from './LateralMenu'

const Header = () => {

  const { AiOutlineMenu } = pkg
  const [ isActive, setIsActive] = useState<boolean>(false)

  const pStyle='hover:scale-105 cursor-pointer hover:font-bold hover:border-b-2 hover:border-black duration-75'

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
    <div className='flex w-2/4 justify-between'>
      <a href="/about"> <p className={pStyle}>Sobre nosotros</p> </a> 
      <a href="/roomie/find"> <p className={pStyle}> Encontrar roomie </p> </a>
      <a href="/room/find"> <p className={pStyle}> Encontrar habitación </p> </a>
      <a href="/roomie/post"> <p className={pStyle}> Publicar roomie </p> </a>
      <a href="/room/post"> <p className={pStyle}> Publicar habitación </p> </a>
    </div>
  </div>
)
}

export default Header

