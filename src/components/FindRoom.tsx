import { CardRoom } from './CardRoom'

export const FindRoom = () => {
  return (
    <div className='m-10 flex justify-center items-center'>
      <div className='flex gap-20 justify-center flex-wrap'>
        <CardRoom Amoblado='No' city='Ibagué' baths={1} people={3} price={1200000} rooms={2} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom Amoblado='Si' city='Ibagué' baths={2} people={1} price={900000} rooms={2} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom Amoblado='No' city='Bogotá' baths={3} people={2} price={850000} rooms={2} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom Amoblado='Si' city='Medellín'baths={2} people={3} price={800000} rooms={1} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom Amoblado='No' city='Ibagué' baths={1} people={3} price={750000} rooms={1} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom Amoblado='No' city='Bogotá' baths={2} people={1} price={850000} rooms={2} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom Amoblado='No' city='Medellín'baths={1} people={2} price={950000} rooms={2} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
        <CardRoom Amoblado='Si' city='Bogotá' baths={1} people={1} price={1000000} rooms={3} description='Alquilo una habitación individual libre de ruidos del centro. Súper bien conectado con lineas de buses. No se puede fumar en el apartamento'/>
      </div>
    </div>
  )
}
