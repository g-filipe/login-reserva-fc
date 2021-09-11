import './Diretrizes.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/home-intro-small.png'
import { useState } from 'react';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { WarningModal } from '../../components/WarningModal/WarningModal';

const Diretrizes = () => {

  const [selected, setSelected] = useState("");

  const [openWarningModal, setOpenWarningModal] = useState(false);

  return (

    <div className="App">

      <div>

        <Navbar />

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

<Button
  buttonSize='btn--p'
  buttonStyle='btn--solido'
>
  Sim
</Button>

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
        <td><Dropdown selected={selected} setSelected={setSelected} /></td>
        <td className='table-right'>240</td>

      </tr>

      <td>Santos, SP</td>
      <td><Dropdown selected={selected} setSelected={setSelected} /></td>
      <td className='table-right'>100</td>


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

          <Button
            buttonSize='btn--p'
            buttonStyle='btn--solido'
          >
            Sim
          </Button>

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
                <td><Dropdown selected={selected} setSelected={setSelected} /></td>
                <td className='table-right'>240</td>

              </tr>

              <td>Santos, SP</td>
              <td><Dropdown selected={selected} setSelected={setSelected} /></td>
              <td className='table-right'>100</td>


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
