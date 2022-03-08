import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () =>{
  const heart = <FontAwesomeIcon icon = {faHeart} className='heart'></FontAwesomeIcon> 
  return (
    <div className = 'footer'>
      <h3>Desenvolvido com {heart} por Rodrigo Queiroz</h3>
    </div>
  );
}

export default Footer;