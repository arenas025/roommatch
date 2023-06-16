interface buttonComponentInterface {
  text:string,
  onClick:()=>void
}

export const ButtonComponent = ({text,onClick}:buttonComponentInterface) => {
  return (
    <div className="w-3/5 h-10 bg-yellow-logo z-10 flex items-center justify-center rounded-3xl" onClick={onClick} >
      <p className="text-base">{text}</p>
    </div>
  );
}
