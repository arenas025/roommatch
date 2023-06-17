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
    <div className={` ${className} w-3/5 h-10 bg-yellow-logo z-10 flex items-center justify-center rounded-3xl`} onClick={onClick} >
      <p className="text-base">{text}</p>
    </div>
  );
}

export const ButtonRouteComponent = ({text,route,className, classNameP}:buttonRouteComponentInterface) => {
  return (
    <a className= {` ${className} w-3/5 flex items-center justify-center h-10 bg-yellow-logo z-10 rounded-3xl`} href={`/${route}`}>
      <div className="flex items-center justify-center" >
        <p className={`font-bold text-base ${classNameP}`}>{text}</p>
      </div>
    </a>
  );
}
