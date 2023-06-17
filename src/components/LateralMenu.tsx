import { LateralMenuItem } from './LateralMenuItem'
import { AiOutlineClose } from 'react-icons/ai'
import {BiDownload} from 'react-icons/bi' 
import {BsQuestionLg} from 'react-icons/bs'
import {RiTeamFill} from 'react-icons/ri'


interface LateralMenuInterface {
  setClose:React.Dispatch<React.SetStateAction<boolean>>
}
export const LateralMenu = ({setClose}:LateralMenuInterface) => {
  return (
    <div className='fixed right-0 top-0 w-screen z-20 h-screen'>
      <div className='bg-black w-full h-full opacity-70 absolute'>

      </div>
      <div className=' bg-white w-2/3 absolute right-0 top-0 h-screen z-30'>
        <div className='h-14 flex items-center justify-end pr-3 bg-slate-200'>
        <AiOutlineClose onClick={()=>{
          setClose(false)
        }} size={25}/>
        </div>
        <div className='h-4/5 w-full flex flex-col gap-10 pt-7 items-end'>
        <LateralMenuItem name='Nosotros' route='about' Icon={RiTeamFill} />
        <LateralMenuItem name='Preguntas frecuentes' route='about' Icon={BsQuestionLg} />
        <LateralMenuItem name='Descarga la app' route='' Icon={ BiDownload} />
        {/* <LateralMenuItem name='asa' route='' /> */}
        </div>
      </div>
    </div>
  )
}
