import { FindCard } from './FindCard';
import people from '../assets/people-1.jpg'
import people2 from '../assets/people-2.jpg'
import people3 from '../assets/people-3.jpg'
import people4 from '../assets/people-4.jpg'
import people5 from '../assets/people-5.jpg'
import people6 from '../assets/people-6.jpg'
import people7 from '../assets/people-7.jpg'



export const FindRoomie = () => {

  const dStyle = 'w-5/6 mb-10 bg-red-logo p-3 rounded-lg'

  const pdStyle = 'font-bold text-center text-white text-2xl'


  return (
    <div className='m-10 flex flex-col justify-center items-center'>
      <div className={`${dStyle} `}>
        <p className={`${pdStyle}`}>
          Encuentra tu roomie adecuado
        </p>
      </div>
      <div className='flex gap-20 justify-center flex-wrap'>
        <FindCard age={22} city='Ibagué' gender='Mujer' hobbies='Me gusta leer, tocar guitarra y pasear de noche mientras escucho música' image={people} name='Diana Rivera'/>
        <FindCard age={23} city='Bogotá' gender='Mujer' hobbies='Me gusta ir a conciertos y escuchar música' image={people2} name='Diana Cruz'/>
        <FindCard age={20} city='Ibagué' gender='Hombre' hobbies='Disfruto de ir a cine y disfrutar de peliculas, me gusta leer también' image={people3} name='Carlos Cruz'/>
        <FindCard age={28} city='Medellín' gender='Hombre' hobbies='Me gusta salir a caminar e ir al gimnasio, me gusta el deporte' image={people4} name='Oscar Paz'/>
        <FindCard age={29} city='Bogotá' gender='Hombre' hobbies='Disfruto de subir montañas y salir a caminar cada vez que pueda, además me gusta viajar' image={people5} name='Oscar Paz'/>
        <FindCard age={32} city='Ibagué' gender='Hombre' hobbies='Disfruto salir de fiesta y disfrutar mi vida' image={people6} name='Carlos Isaac'/>
        <FindCard age={29} city='Ibagué' gender='Mujer' hobbies='Me gusta jugar juegos de video, además de ver peliculas en casa, me gusta la vida tranquila' image={people7} name='Camila Cruz'/>
      </div>
    </div>
  )
}
