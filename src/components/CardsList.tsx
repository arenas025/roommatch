import { Card } from "./Card";

const CardsList = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-10 sm:h-1/4 h-2/5 w-full pt-10 pb-10 justify-center items-center">
      <Card
        textButton="Publicar habitación"
        route='roomie/post'
        background="room22"
        title="Publica tu habitacion"
        text={"Y encuentra tu compañero de piso ideal"}
      />
      <Card
        textButton="Publicar piso"
        background="room2"
        route='room/post'
        title="Publica tu piso"
        text={"Y alquila tu vivienda inmediatamente"}
      />
    </div>
  );
};

export default CardsList
