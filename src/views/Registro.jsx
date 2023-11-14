import TextRegistro from '../components/TextRegistro.jsx'
import '../styles/Registro.css'
const Registro = () => {
  return (
    <div className='contenedor'>
    <div className='fotoHombre'>
    <img src="src/assets/hombre.jpg" alt="" />
   
  </div>
 
  <div className='titulo1'>
    <h1>FIGHT <br></br>
   
      LIKE<br></br>
     
      A<br></br>
     
      CHAM <br></br>
      PION</h1>
  </div>
  <div className='titulo2'>
    <h1>READY FOR YOUR <br></br>
     NEXT LESSON?</h1>
  </div>
 
  <TextRegistro/>
</div>
  )
}

export default Registro
