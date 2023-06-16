import rooomie3 from '../assets/roomie3.jpg'
import aboutImage from '../assets/aboutImage.png'

const About = () => {
  return (
    <div className="pb-20">
      <div className="flex justify-center mt-5  items-center flex-col sm:flex-row sm:gap-4 ">
        <p className="text-5xl font-bold text-purple-logo text-center  w-fit">¿Quienes</p>
        <p className="text-5xl font-bold text-yellow-logo text-center">somos?</p>
      </div>
      <div className="sm:flex ">
        <img className="mt-5" src={aboutImage} />
        <div className="p-5 sm:flex sm:flex-col sm:justify-center">
          <p className="text-xl  sm:text-2xl font-['DM Sans'] right-0 w-[250px] sm:w-3/4 mb-10 text-justify">
            RoomMatch no solo es una aplicación confiable sino un lugar donde sus integrantes confíen entre sí.
          </p>
          <p className="text-xl  sm:text-2xl text-justify ml-auto w-[250px] sm:w-3/4 sm:ml-0 mb-10">
            Encontrar a una persona con la que quieras compartir un lugar para vivir se basa en muchos aspectos, pero sobre todo en la confianza.
          </p>
          <p className="text-xl sm:text-2xl text-justify  w-[250px] sm:w-3/4 mb-10">
            Somos tu aliado para conectarte con personas que compartan tus intereses y necesidades de vivienda con el fin de que la experiencia de la convivencia sea la mejor.
          </p>
          <p className="text-xl sm:text-2xl text-justify ml-auto w-[250px] sm:w-3/4 sm:ml-0">
            Somos tu aliado para que encuentres al arrendatario adecuado y que tu piso quede en las mejores manos, sin preocupaciones
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5  items-center flex-col sm:flex-row sm:gap-4">
        <p className="text-5xl font-bold text-yellow-logo text-center  w-fit">Nuestra</p>
        <p className="text-5xl font-bold text-purple-logo text-center">Historia</p>
      </div>
      <div className="p-5 sm:p-0 sm:flex sm:gap-10 sm:mt-14 ">
      <p className="text-justify text-xl sm:ml-10 sm:text-2xl sm:w-4/5">
        RoomMatch es una empresa fundada en el 2010 que inició respondiendo a la problemática de las personas que tenían dificultad en la independización o la relocación para su vivienda.
        <br/><br/>
        Después de un largo proceso de indagación, concluimos que uno de los principales aspectos con los que las personas se encontraban al buscar su independencia o su reubicación era encontrar un adecuado compañero de vivienda, o Roomie, ya que para ellos no era la mejor opción financieramente la independencia completa y debido a esto, su única opción era buscar a alguien con quien compartir gastos y residencia.
        <br/><br/>
        También descubrimos que a los propietarios de viviendas se les dificulta encontrar un arrendatario de confianza y que cuide su vivienda como si fuera propia, asi que decidimos dirigir nuestros esfuerzos también a aquellas personas que quisieran arrendar su vivienda, permitiendoles que conecten con personas adecuadas a su piso y que aquellos que buscan roomie también puedan encontrar una piso que se ajuste a sus necesidades
      </p>
      <img src={rooomie3} className=' sm:w-1/3 sm:mr-10 rounded-2xl' />
      </div>
    </div>
  );
}

export default About
