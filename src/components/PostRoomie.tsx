import { ButtonComponent } from "./ButtonComponent"

const PostRoomie = () => {

  const handleSubmit =()=>{

  const formRef:HTMLFormElement = document.getElementById('form')!

  const form = new FormData(formRef)
    const name = form.get('name') || null
    const age = form.get('age') || null
    const hoobies = form.get('hoobies') || null
    const roomies = form.get('roomies') || null
    const city = form.get('city') || null
    const ageroomie = form.get('ageroomie') || null
    const gender = form.get('gender') || null

  if((name && age && hoobies) === null){
      alert('Complete todos los campos')
    }
}

const iStyle = 'border-2  p-2 rounded-lg border-slate-200 w-2/4'

const dStyle = 'w-full  p-3 rounded-lg'

const pdStyle = 'font-bold text-center text-white text-2xl'


  return (
    <div className="flex items-center justify-center">
      <div className="w-2/4">
      <div className={`${dStyle} bg-red-logo`}>
        <p className={`${pdStyle}`}>
          Cuentanos de ti
        </p>
      </div>
      <form id='form'>
        <div>
          <div className={`${dStyle} bg-slate-200`}>
            <p className='text-left text-2xl'>
              Tus datos
            </p>
          </div>
          <div className="flex flex-col gap-5 pt-5 pb-5">
            <div className="flex">
              <label className="text-xl">
                Tu nombre completo 
              </label>
              <input name="name" className={`${iStyle}`} type='text'/>
            </div>
            <div className="flex">
              <label className="text-xl">
                Tu edad
              </label>
              <input name='age' className={`${iStyle}`} type="number"/>
            </div>
            <div>
              <label className="text-xl">
                ¿Cual es tu genero?
              </label>
              <select className={`${iStyle}`} name="gender">
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="text-xl">
                Ciudad en la que planeas vivir
              </label>
              <select name="city" className={`${iStyle}`} defaultValue={''}>
                <option value="bogota">Bogotá</option>
                <option value="ibague">Cali</option>
                <option value="medellin">Medellin</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xl">
                Cuentanos tus hobbies
              </label>
              <input name="hoobies" className={`${iStyle}`} type="text" />
            </div>
          </div>
        </div>
        <div>
          <div className={`${dStyle} bg-slate-200`}> 
            <p className='text-left text-2xl'>
              ¿Con cuantas personas quieres vivir?
            </p>
          </div>
          <div className="pt-5 pb-5">
            <label className="text-xl">
              Numero de personas
            </label>
            <select className={`${iStyle}`} name="roomies">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="+4">+4</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <div className={`${dStyle} bg-slate-200`}> 
            <p className='text-left text-2xl'>
              ¿Qué tipo de persona buscas?
            </p>
          </div>
          <label className="text-xl">
            Rango de edad
          </label>
          <select name="ageroomie" className={`${iStyle}`}>
            <option value="18-25">18-25</option>
            <option value="25-30">25-30</option>
            <option value="30-35">30-35</option>
            <option value="+40">+40</option>
          </select>
          <label className="text-xl">
            Genero de preferencia
          </label>
          <select name="gender" className={`${iStyle}`}>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
            <option value="cualquiera">Cualquiera</option>
          </select>
          <label className="text-xl">
            Aceptas mascotas?
          </label>
          <select name="vets" className={`${iStyle}`}>
            <option value="no">Si</option>
            <option value="yes">No</option>
          </select>
        </div>
      </form>      
      <ButtonComponent onClick={handleSubmit} text="Aceptar" />
      </div>
    </div>
  )
}

export default PostRoomie