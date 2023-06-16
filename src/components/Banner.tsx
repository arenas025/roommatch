
import { useState } from 'react';

interface typeInterface{
  type : 'roomie' | 'bedroom' | null
}

const Banner = () => {

const [type, setType] = useState<typeInterface>({
  type:'roomie'
})

  return (
    <div
      className={
        type.type === "bedroom"
          ? "bg-room bg-top p-10 h-96 sm:h-[500px] bg-cover sm:bg-center sm:bg-cover bg-no-repeat w-screen flex flex-col gap-0 justify-center items-center relative"
          : "bg-roomie sm:bg-bannerWeb bg-top p-10 h-96 sm:h-[500px] sm:bg-center bg-cover bg-no-repeat w-screen flex flex-col gap-0 justify-center items-center relative"
      }
    >
      <div className="bg-black opacity-50 w-full h-full top-0 left-0 absolute" />
      <p className="font-bold text-2xl sm:text-4xl text-center text-white z-10 align-bottom">
        Comparte tu espacio <br /> con la persona indicada
      </p>
      <div className="flex mt-16 flex-row w-full justify-center gap-5 z-10">
        <p
          className={
            type.type === "roomie"
              ? " text-sm sm:text-lg border-b-2 text-white border-white font-bold transition-all duration-100 z-10"
              : "text-sm sm:text-lg text-white"
          }
          onClick={() => {
            setType({ type: "roomie" });
          }}
        >
          Encuentra roomie
        </p>
        <p
          className={
            type.type === "bedroom"
              ? " text-sm sm:text-lg text-white border-b-2 border-white font-bold transition-all duration-100 z-10 "
              : "text-sm sm:text-lg z-10 text-white"
          }
          onClick={() => {
            setType({ type: "bedroom" });
          }}
        >
          Encuentra habitación
        </p>
      </div>
      <input
        onChange={(value) => console.log("value.target")}
        className="rounded-3xl w-5/6 sm:w-96 mt-5 h-8 sm:h-12 p-4 z-10 text-sm"
        placeholder="Buscar por ciudad, municipio, barrio"
      />
      {/* <LateralMenu/> */}
    </div>
  );
}

export default Banner

