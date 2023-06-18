import { useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import { ButtonComponent, ButtonComponentSmall } from './ButtonComponent'


interface CardRoomInterface {
  rooms:number
  baths:number
  Amoblado:string
  people: number
  description:string
  price:number
  city:string
} 


export const CardRoom = ({Amoblado,baths,description,people,price,rooms,city}:CardRoomInterface) => {

  const [like, setlike] = useState<boolean>(false)
  
  return (
    <div className='w-[500px] relative bg-slate-200 h-[500px] bg-red p-5 rounded-xl'>
      <div className='flex align-top'>
        <img className='w-96 rounded-xl h-72 ml-auto mr-auto ' src='https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' />
        {like ?  <AiFillHeart onClick={()=>setlike(false)} size={20}/> :<AiOutlineHeart onClick={()=>setlike(true)} size={20}/>}
      </div>
      <div className='flex flex-col mt-4 pr-2 pl-2 gap-5'>
        <div className='flex justify-between'>
          <p className='text-lg'>
            Habitaciones: <b>{rooms}</b>
          </p>
          <p className='text-lg'>
            Baños: <b>{baths}</b>
          </p>
          <p className='text-lg'>
            Amoblado:<b>{Amoblado}</b>
          </p>
        </div>
        <div className='flex justify-around'>
          <p className='text-lg'>
            Para  <b>{people}</b> personas
          </p>
          <p className='text-lg'>Precio mes:<b>{price} </b> </p>
          <p className='text-lg'>Lugar:<b>{city}</b></p>
        </div>
      </div>
      <p className='mt-3 '>
        {description}
      </p>
    { like &&
    <div className='absolute h-10 rounded-lg justify-around -bottom-8 left-0 rounded-tl-none gap-2 bg-slate-200 w-80 flex p-2'>
      <label>
        Tu celular
      </label>
      <input type='number' className='w-2/5 text-center rounded-sm text-sm'/>
      <ButtonComponentSmall text='Enviar' className='w-16 h-7' onClick={()=>{}}/>
    </div>
    }
    </div>
  )
}
