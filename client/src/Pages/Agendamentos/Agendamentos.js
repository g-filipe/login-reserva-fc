import './Agendamentos.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/home-intro-small.png'
import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';
import { Carrossel } from '../../components/Carrossel/Carrossel';



const Agendamentos = () => {
  
  const [openModal, setOpenModal] = useState(false);
   
  return (

    <div className="seusagnd-App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}

      <div className="seusagnd-spa-home">

        {/* Modal */}

        {openModal && <Modal closeModal={setOpenModal}>

          <div className='w-modal-text'>

            <h1>Após confirmar, a porcentagem de ocupação das Unidades serão alteradas.
            </h1>
            <h2>Deseja mesmo continuar?</h2>

          </div>

          <Link to='confirma-alt'>

            <Button
              buttonSize='btn--p'
              buttonStyle='btn--solido'
            >Sim</Button>

          </Link>

          <Button
            buttonSize='btn--p'
            buttonStyle='btn--vazado'
            onClick={() => setOpenModal(false)}
          >
            Voltar
          </Button>

        </Modal>}

        <div className="seusagnd-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        
        <div className="seusagnd-spa-home-right">


            <div className='seusagnd-text'>

              <h1> Seus Agendamentos </h1>

            </div>

          <div className='seusagnd-card'>



            <div className='seusagnd-card'>


<Carrossel/>

</div>


          </div>
        </div>

      </div>
      {/* </div> */}


      {/* MOBILE */}

      <div className='seusagnd-container'>

        {/* Modal */}

        {openModal && <Modal closeModal={setOpenModal}>

          <div className='w-modal-text'>

            <h1>Após confirmar, a porcentagem de ocupação das Unidades serão alteradas.
            </h1>
            <h2>Deseja mesmo continuar?</h2>

          </div>

          <Link to='confirma-alt'>

            <Button
              buttonSize='btn--p'
              buttonStyle='btn--solido'
            >Sim</Button>

          </Link>

          <Button
            buttonSize='btn--p'
            buttonStyle='btn--vazado'
            onClick={() => setOpenModal(false)}
          >
            Voltar
          </Button>

        </Modal>}

          <div className='seusagnd-text'>

            <h4> Seus agendamentos</h4>

          </div>


        <div className='seusagnd-card'>


         <Carrossel/>

        </div>
      </div>

    </div>
  );
}

export default Agendamentos;
