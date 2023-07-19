import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ButtonComponentSmall } from "./ButtonComponent";

interface CardRoomInterface {
  rooms: number;
  baths: number;
  Amoblado: string;
  people: number;
  description: string;
  price: number;
  city: string;
  image: string;
}

export const CardRoom = ({
  Amoblado,
  baths,
  description,
  people,
  price,
  rooms,
  city,
  image,
}: CardRoomInterface) => {
  const [like, setlike] = useState<boolean>(false);

  const [value, setValue] = useState<string>("");

  return (
    <div className="w-[90vw] relative bg-slate-200 h-[45rem] p-5 rounded-xl lg:h-[600px] lg:w-[500px]">
      <div className="flex align-top">
        <img
          alt="imagen de pieza de referencia"
          className="w-96 rounded-xl h-72 ml-auto mr-auto "
          src={image}
        />
      </div>
      <div className="flex flex-col mt-4 pr-2 pl-2 gap-5">
        <div className="flex justify-between gap-2">
          <p className="text-lg">
            Habitaciones: <b>{rooms}</b>
          </p>
          <p className="text-lg">
            Baños: <b>{baths}</b>
          </p>
          <p className="text-lg">
            Amoblado: <b>{Amoblado}</b>
          </p>
        </div>
        <div className="flex justify-around">
          <p className="text-lg">
            Para <b>{people}</b> personas
          </p>
          <p className="text-lg">
            Precio mes <b>{price} </b>{" "}
          </p>
          <p className="text-lg">
            Lugar <b>{city}</b>
          </p>
        </div>
      </div>
      <p className="mt-3 ">{description}</p>
      {like ? (
        <AiFillHeart
          className="mt-10 h-10 w-10 text-red-600 lg:static"
          onClick={() => setlike(false)}
          size={20}
        />
      ) : (
        <AiOutlineHeart
          className="mt-10 h-10 w-10 lg:static lg:h-8 lg:w-8"
          onClick={() => setlike(true)}
          size={20}
        />
      )}
      {like && (
        <div className="absolute h-10 rounded-lg justify-around -bottom-8 left-0 rounded-tl-none gap-2 bg-slate-200 w-80 flex p-2">
          <label>Tu celular</label>
          <input
            type="number"
            onChange={(value) => {
              setValue(value.currentTarget.value);
            }}
            className="w-2/5 text-center rounded-lg text-sm"
          />
          <ButtonComponentSmall
            text="Enviar"
            className="w-16 h-7"
            onClick={() => {
              if (value === "") {
                alert("Ingresa tu número de telefono");
              } else {
                alert(
                  "La persona se contactará contigo en los proximos dias para darte más información"
                );
              }
            }}
          />
        </div>
      )}
    </div>
  );
};
