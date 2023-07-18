import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ButtonComponentSmall } from "./ButtonComponent";

interface findCardRoom {
  name: string;
  age: number;
  gender: string;
  hobbies: string;
  city: string;
  image: string;
}

export const FindCard = ({
  age,
  city,
  gender,
  hobbies,
  image,
  name,
}: findCardRoom) => {
  const [like, setlike] = useState<boolean>(false);

  const [value, setValue] = useState<string>("");

  return (
    <div className="w-[90vw] h-[65vh] lg:w-[500px] relative bg-slate-200 lg:h-[500px] bg-red p-5 rounded-xl">
      <div className="flex align-top">
        <img
          alt="imagen de pieza de referencia"
          className="w-96 rounded-xl  object-cover h-72 ml-auto mr-auto "
          src={image}
        />
        {like ? (
          <AiFillHeart
            className="absolute bottom-10 left-[45%] h-10 w-10 lg:static lg:h-8 lg:w-10  text-red-600"
            onClick={() => setlike(false)}
            size={20}
          />
        ) : (
          <AiOutlineHeart
            className="absolute bottom-10 left-[45%] h-10 w-10 lg:static lg:h-8 lg:w-10  "
            onClick={() => setlike(true)}
            size={20}
          />
        )}
      </div>
      <div className="flex flex-col mt-4 pr-2 pl-2 gap-5">
        <div className="flex justify-around">
          <p className="text-lg">
            <b>{name}</b>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">
            Ciudad: <b>{city}</b>
          </p>
          <p className="text-lg">
            Edad: <b>{age}</b>
          </p>
          <p className="text-lg">
            Genero: <b>{gender}</b>
          </p>
        </div>
      </div>
      <p className="mt-3 ">
        Hobbies: <b>{hobbies}</b>
      </p>
      {like && (
        <div className="absolute h-10 rounded-lg justify-around -bottom-12 left-0 rounded-tl-none gap-2 bg-slate-200 w-80 flex p-2">
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
