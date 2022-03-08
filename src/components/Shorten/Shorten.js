import React, { useState } from 'react';
import './style.css'
import getShorten from '../../api.js';
import swal from 'sweetalert';

const Shorten = () => {
  const data = { originURL: ''}
  const [url, setUrl] = useState([]);
  const [originURL, setOriginURL] = useState(data)

  const handleChange = ({ target }) => {
    const { value } = target;
    setOriginURL({
      originURL: value,
    });
  };

  const handleUrl = async () => {
    try {
      if (originURL.originURL.length < 8) return swal('Digite um site válido. ex.: https://google.com/')
      const getURL = await getShorten(originURL)
      console.log(getURL)
      return setUrl([getURL.shortURL])
    } catch (e) {
    console.log(e);
    };
  }
  return (
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="shorten-url" class="sr-only">Email</label>
        <input 
          type="text" 
          readonly class="form-control-plaintext" 
          id="shorten-url" 
          placeholder="Digite o link que deseja encurtar começando com o http ou http://" 
          onChange={ handleChange }
        />
      </div>
      <button 
      type="button" 
      class="btn"
      onClick={ handleUrl}
      >
        Encurtar
      </button>
    <div className = 'shortenURL'>
      { url.map((item, index) => (
        <>
        <p> URL encurtada: </p><a href={item} target="_blank" key = {index} rel="noreferrer"> {item} </a>
        </>
      )) }
    </div>
    </form>
  )
}

export default Shorten;