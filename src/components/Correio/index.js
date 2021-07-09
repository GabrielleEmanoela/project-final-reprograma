import React from 'react';
import './styles.css';
import emailjs from 'emailjs-com';
import forms from '~/service/forms';

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'SERVICE',
        'template_pchn4sn',
        e.target,
        'user_Rolet7BZS3tUrwK6TDFI7'
      )
      .then(
        (result) => {
          alert('Enviado com sucesso. :)');

          console.tron.log(result.text);
        },
        (error) => {
          console.tron.log(error.text);
          alert('Ops, alguma coisa deu errado confira o e-mail novamente:(');
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="containerMain">
        <form onSubmit={sendEmail}>
          <div className="titleContainer">
            <p>Você gostaria de se identificar ?</p>
            <input
              className="input"
              name="name"
              placeholder="Digite o seu nome"
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
            <p>Nome</p>
            <input
              type="text"
              name="dele"
              className="input"
              placeholder="Digite o nome dele ou dela"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              name="email"
              className="input"
              placeholder="Digite o email dele ou dela"
            />
          </div>
          <p>Surpreenda</p>
          <input
            name="mensagem"
            className="input"
            placeholder="Solte o verbo para seu/sua amado(a)"
          />
          <div />

          <input className="buttonFormulario" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
}

export default ContactUs;
