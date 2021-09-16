import './Diretrizes.css';
import { Button } from '../../components/Button/Button';
import { Navbar2 } from '../../components/Navbar2/Navbar2';
import img from '../../assets/home-intro-small.png'
import { useState, useEffect } from 'react';
import { DropdownSP } from '../../components/Dropdown/DropdownSP.js';
import { DropdownSantos } from '../../components/Dropdown/DropdownSantos.js';
import { WarningModal } from '../../components/WarningModal/WarningModal';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Diretrizes = () => {

  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");

  const TotalSP = Math.round(selected * 600 / 100);
  const TotalSantos = Math.round(selected2 * 100 / 100);

  const [openWarningModal, setOpenWarningModal] = useState(false);

   //Aqui cria estados para que eu possa pegar os dados da api e colocar neles

   const [capacidade, setCapacidade] = useState([]);
   const [vagas, setVagas] = useState(0);
 
   //Aqui pega os dados do escritório de SP, mas ainda não sei como enviar os dados que precisamos do front para cá,
   // por enquanto eu coloquei o id_escritorio manualmente

   useEffect(() => {
    let escritorio = "1";
    api.get(`/lotacao/${escritorio}`).then((data) => {
      setCapacidade(data.data["capacidade"]);
      setVagas(data.data["vagas"])
    });
    //eslint-disable-next-line
  }, []);
  console.log(capacidade + " " + vagas);
  
  return (

    <div className="App">

      <div>

        <Navbar2 />

      </div>

      {/* WEB */}

      <div className="dir-spa-home">

        {/* Modal */}

        {openWarningModal && <WarningModal closeWarningModal={setOpenWarningModal}>

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
            onClick={() => setOpenWarningModal(false)}
          >
            Voltar
          </Button>

        </WarningModal>}

        <div className="dir-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="dir-spa-home-right">
          {/* <div className='dir-container'> */}



          <div className='dir-card'>


            <div className='dir-text'>

              <h1> Determine a capacidade limite de ocupação das Unidades</h1>

            </div>

            <div className='dir-table'>

              <table className='table'>

                <tr>

                  <td>Unidade</td>
                  <td className='table-right'>%</td>
                  <td className='table-right'>Total</td>

                </tr>

                <tr>

                  <td>São Paulo, SP</td>
                  <td><DropdownSP selected={selected} setSelected={setSelected} /></td>
                  <td className='table-right'>{TotalSP}</td>

                </tr>

                <td>Santos, SP</td>
                <td><DropdownSantos selected2={selected2} setSelected2={setSelected2} /></td>
                <td className='table-right'>{selected2}</td>


              </table>

            </div>

            <div className='dir-btn'>

              <Button
                buttonSize='btn--m'
                onClick={() => { setOpenWarningModal(true); }}
              > Atualizar Diretrizes </Button>

              <Button
                buttonStyle='btn--vazado'
                buttonSize='btn--m'
              > Voltar </Button>

            </div>


          </div>
        </div>

      </div>
      {/* </div> */}


      {/* MOBILE */}

      <div className='dir-container'>

        {/* Modal */}

        {openWarningModal && <WarningModal closeWarningModal={setOpenWarningModal}>

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
            onClick={() => setOpenWarningModal(false)}
          >
            Voltar
          </Button>

        </WarningModal>}

        <div className='dir-card'>


          <div className='dir-text'>

            <h4> Determine a capacidade limite de ocupação das Unidades</h4>

          </div>

          <div className='dir-table'>

            <table className='table'>

              <tr>

                <td>Unidade</td>
                <td className='table-right'>%</td>
                <td className='table-right'>Total</td>

              </tr>

              <tr>

                <td>São Paulo, SP</td>
                <td><DropdownSP selected={selected} setSelected={setSelected} /></td>
                <td className='table-right'>{TotalSP}</td>

              </tr>

              <td>Santos, SP</td>
              <td><DropdownSantos selected2={selected2} setSelected2={setSelected2} /></td>
              <td className='table-right'>{selected2}</td>


            </table>

          </div>

          <div className='dir-btn'>

            <Button
              buttonSize='btn--m'
              onClick={() => { setOpenWarningModal(true); }}
            > Atualizar Diretrizes </Button>

            <Button
              buttonStyle='btn--vazado'
              buttonSize='btn--m'
            > Voltar </Button>

          </div>


        </div>
      </div>

    </div>
  );
}

export default Diretrizes;
