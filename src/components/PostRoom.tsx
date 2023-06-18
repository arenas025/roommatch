import { ButtonComponent } from "./ButtonComponent"

const PostRoom = () => {

  const handleSubmit =()=>{

  const formRef:HTMLFormElement = document.getElementById('form')!

  const form = new FormData(formRef)
    const name = form.get('name') || null
    const email = form.get('email') || null
    const phone = form.get('phone') || null
    const rooms = form.get('rooms') || null
    const baths = form.get('baths') || null
    const people = form.get('people') || null
    const gender = form.get('gender') || null


  if((name && email && phone) === null){
      alert('Complete todos los campos')
    }
}

const iStyle = 'border-2  p-2 rounded-lg border-slate-200 w-2/4'

  return (
    <div className="flex items-center justify-center">
      <div className="w-2/4 mt-10">
      <div className="flex flex-col">
          <div className="w-full bg-red-logo p-3 rounded-lg">
        <p className="text-center font-bold text-white text-2xl">
          Cuentanos de ti
        </p>
      </div>
      <form id='form'>
        <div>
          <div className="w-full mt-10 bg-slate-200 p-3 rounded-lg">
            <p className="text-left text-2xl">
              Tus datos
            </p>
          </div>
          <div className="flex gap-5 w-full justify-center flex-col pt-5 pb-5">
            <div className="flex items-center">
              <label className="text-xl">
              Nombre completo 
              </label>
              <input name="name" className="border-2 ml-5 p-2 rounded-lg border-slate-200 w-2/4" type='text'/>
            </div>
            <div className="flex items-center"  >
              <label className="text-xl">
                Correo electrónico 
              </label>
              <input name="email" className="border-2 ml-5 p-2 rounded-lg border-slate-200 w-2/4" type='email'/>
            </div>
            <div className="flex items-center">
              <label className="text-xl">
                Número de celular
              </label>
              <input name="phone" className="border-2 ml-5 p-2 rounded-lg border-slate-200 w-2/4" type='number'/>
            </div>
          </div>
          </div>
          <div className="w-full bg-slate-200 p-3 rounded-lg">
            <p className="text-left text-2xl">Datos de tu vivienda</p>
          </div>
          <div className="flex flex-col gap-5 pb-5 pt-5">
            <div className="flex items-center">
              <label className="text-xl">
                Habitaciones
              </label>
              <select className={`${iStyle} ml-32`} name="rooms">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="+3">+3</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="text-xl">
                Baños
              </label>
              <select className={`${iStyle} ml-48`} name="baths">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="+3">+3</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="text-xl">
                ¿Para cuantas personas?
              </label>
              <select className={`${iStyle} ml-8`} name="people">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3+</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="text-xl">
                Precio de alquiler
              </label>
              <input className={`${iStyle} ml-24`} type="number"/>
            </div>
            <div className="flex items-center">
              <label className="text-xl">
                ¿Amoblado?
              </label>
              <select className={`${iStyle} ml-32`} name="people">
                <option value="no">No</option>
                <option value="si">Si</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xl">
                Descripción de tu piso
              </label>
              <textarea name="description" className={`${iStyle} w-[100%]`} />
            </div>
          </div>
      </form>
      </div>
      <ButtonComponent className="w-56 ml-auto mr-auto mt-10" onClick={handleSubmit} text="Aceptar" />
      </div> 
    </div>
  )
}

export default PostRoom
