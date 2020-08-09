import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/56412569?s=460&u=b2b92410dbe3f9e77c19fe91efcfb83eefd11982&v=4"
          alt="Humberto" />
        <div>
          <strong>Humberto Filho</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
      <br />  <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>
      <footer>
        <p>
          Preço/hora
        <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
        Entrar em contato
      </button>
      </footer>

    </article>
  );
}

export default TeacherItem;