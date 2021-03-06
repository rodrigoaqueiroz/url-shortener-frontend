import './style.css';

import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  const heart = <FontAwesomeIcon icon = { faHeart } className='heart' />
  return (
    <div className = 'footer'>
      <h3>Desenvolvido com {heart} por Rodrigo Queiroz</h3>
    </div>
  );
}

export default Footer;