import { ButtonComponent } from "./ButtonComponent"

interface CardInterface {
  title:string
  text:String,
  background:string,
  textButton:string,
  onClickButton:()=>void
}

export const Card = ({ text, title, background, textButton, onClickButton }: CardInterface) => {
  return (
    <div
      className={` ${background === 'room22' ? "bg-room1":"bg-roomie1" }  rounded-2xl bg-bottom bg-cover bg-no-repeat sm:w-1/4 sm:h-80 w-5/6 h-60 flex flex-col items-start justify-center pl-6 gap-3 relative`}
    >
      <div className="bg-black opacity-50 w-full h-full rounded-2xl absolute left-0" />
      <p className="text-lg text-white font-bold z-10">{title}</p>
      <p className="text-base text-white z-10">{text}</p>
      <ButtonComponent text={textButton} onClick={onClickButton}/>
    </div>
  );
};
