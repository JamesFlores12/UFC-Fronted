import { useState } from 'react';
import '../styles/Login.css'
import ImagenLogin  from '../components/ImagenLogin';
import Mensaje from '../components/Mensaje';
import Mensaje2 from '../components/Mensaje2';
function Login() {
  const [usuario, setUser] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log(`Usuario: ${usuario}, Password: ${password}`);
  }
  return (
    
    <div className="image-container"><ImagenLogin imageUrl="../assets/imagen2.jpg" />
       <div className='mensaje-container'><Mensaje/><Mensaje2/>
           <div>
             <form>
             <div className='gradiente'>
       
       </div>
               <h1>Login</h1>
                  <div className='container-user'><usuario><input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUser(e.target.value)}
                /></usuario>
                  <contraseña><input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  /></contraseña>
                </div>
              <button type="button" onClick={handleLogin}>
                 Login
              </button>
             </form>
            </div>
        </div>
    </div>
  )
}
export default Login
