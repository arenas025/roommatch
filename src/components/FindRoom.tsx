import { CardRoom } from './CardRoom'
import foto from '../assets/room-1.jpg'
import foto2 from '../assets/room-2.jpg'
import foto3 from '../assets/room-3.jpg'
import foto4 from '../assets/room-4.jpg'
import foto5 from '../assets/room-5.jpg'
import foto6 from '../assets/room-6.jpg'


export const FindRoom = () => {

  const dStyle = 'w-5/6 mb-10 bg-red-logo p-3 rounded-lg'

  const pdStyle = 'font-bold text-center text-white text-2xl'


  return (
    <div className='m-10 flex flex-col justify-center items-center'>
       <div className={`${dStyle} `}>
        <p className={`${pdStyle}`}>
          Encuentra la habitación adecuada
        </p>
      </div>
      <div className='flex gap-20 justify-center flex-wrap'>
        <CardRoom image='https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' Amoblado='No' city='Ibagué' baths={1} people={3} price={1200000} rooms={2} description='Se alquila una habitación central, cerca de los centros comerciales de la ciudad, muy acogedor'/>
        <CardRoom image={foto} Amoblado='Si' city='Ibagué' baths={2} people={1} price={900000} rooms={2} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom image={foto2} Amoblado='No' city='Bogotá' baths={3} people={2} price={850000} rooms={2} description='Se arrienda habitación en conjunto cerrado, con campos verdes y jardin. No se puede fumar en el apartamento'/>
        <CardRoom image={foto3} Amoblado='Si' city='Medellín'baths={2} people={3} price={800000} rooms={1} description='Se aquila una habitación libre de ruidos del centro. Súper bien conectado con lineas de buses. Tiene piscina cerca'/>
        <CardRoom image={foto4} Amoblado='No' city='Ibagué' baths={1} people={3} price={750000} rooms={1} description='Arriendo una habitación en el centro de la ciudad, cerca de los centros turísticos y lugares para salir a dar un paseo'/>
        <CardRoom image={foto5}  Amoblado='No' city='Bogotá' baths={2} people={1} price={850000} rooms={2} description='Alquilo una habitación libre de ruidos de la ciudad. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom image={foto6} Amoblado='No' city='Medellín'baths={1} people={2} price={950000} rooms={2} description='S e alquila una habitación individual para 2 personas. Cuenta con zonas verdes y parques para niños Súper bien conectado con lineas de buses.'/>
        <CardRoom image={foto} Amoblado='Si' city='Bogotá' baths={1} people={1} price={1000000} rooms={3} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
      </div>
    </div>
  )
}
