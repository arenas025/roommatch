interface buttonComponentInterface {
  text:string,
  onClick:()=>void,
  className?:string
}

interface buttonRouteComponentInterface {
  text:string,
  route:string,
  className?:string
  classNameP?:string
}

export const ButtonComponent = ({text,onClick, className}:buttonComponentInterface) => {
  return (
    <div className={` w-3/5 h-10 bg-yellow-logo z-10 flex items-center justify-center hover:cursor-pointer rounded-3xl ${className}`} onClick={onClick} >
      <p className="text-base">{text}</p>
    </div>
  );
}

export const ButtonComponentSmall = ({text,onClick, className}:buttonComponentInterface) => {
  return (
    <div className={` bg-yellow-logo z-10 flex items-center justify-center hover:cursor-pointer rounded-3xl ${className}`} onClick={onClick} >
      <p className="text-base">{text}</p>
    </div>
  );
}

export const ButtonRouteComponent = ({text,route,className, classNameP}:buttonRouteComponentInterface) => {
  return (
    <a className= {` ${className} w-3/5 flex items-center justify-center h-10 bg-yellow-logo z-10 rounded-3xl hover:cursor-pointer`} href={`/${route}`}>
      <div className="flex items-center justify-center" >
        <p className={`font-bold text-base ${classNameP}`}>{text}</p>
      </div>
    </a>
  );
}
