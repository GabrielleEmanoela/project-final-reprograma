import React from 'react';
import './styles.css';
import forms from '~/service/forms';

function Correio() {
  return (
    <>
      <div className="containerMain">
        <div className="titleContainer">
          <p>Você gostaria de se identificar ?</p>
          <input
            className="input"
            type="text"
            placeholder="Digite o email dele ou dela"
          />
        </div>
        <div className="containerDivision">
          {forms.map((item) => (
            <div>
              <img src={item.img} alt={item.name} className="containerimg" />
            </div>
          ))}
        </div>
        <div>
          <p>Email</p>
          <input
            className="input"
            type="text"
            placeholder="Digite o email dele ou dela"
          />
        </div>
        <p>Surpreenda</p>
        <input
          className="input"
          type="text"
          placeholder="Solte o verbo para seu/sua amado(a)"
        />
        <div />
        <button className="buttonFormulario" type="button">
          ENVIAR CORREIO
        </button>
      </div>
    </>
  );
}

export default Correio;
