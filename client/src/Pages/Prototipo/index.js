import './style.css';
import logo from '../../assets/logo5.png'

const Prototipo = () =>  {
  return (
    
    <div className="App">

      <div className='container'>

        <div className='card'>

          <div className = 'figure'>

            <img src={logo} alt='logo Fcamara' />

          </div>


          <div className='button'>

            <button>Colaborador</button>

          </div>
                 
          <div className='button'>

            <button>Administrador</button>

          </div>


        </div>
      </div>

    </div>
  );
}

export default Prototipo;
