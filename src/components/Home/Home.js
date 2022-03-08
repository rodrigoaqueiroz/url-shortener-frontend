import React from 'react';
import './style.css';

const Home = () =>{
  return (
    <>
      <div className='home'>
        <h1>Página Inicial</h1>
          <div className = 'mainPage'>
            <p> Projeto Encurtador de URL, o último projeto proposto do bootcamp da <a className="eduzz" href="https://www.eduzz.com/" target="_blank" rel="noreferrer">eduzz</a> na DIO.  
            O objetivo do projeto é fazer uma API com NodeJS e Typescript, gerando hashes únicos para cara entrada do usuário e conectar as entradas com os hashes gerados. <br/>
            O frontend foi desenvolvido em React como projeto pessoal para fazer a ligação com a API proposta e retornar o link encurtado para o usuário.
            
            </p>
          </div>
      </div>
  </>
  );
}

export default Home;