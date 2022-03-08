import React, { useState } from 'react';
import './style.css'
import getShorten from '../../api.js'

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

  const handleUrl = async (e) => {
    e.preventDefault();
    try {
      if (originURL.originURL.length < 8) return alert('Digite uma site válido. Ex.: https://google.com.br/')
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
          placeholder="Digite o link que deseja encurtar" 
          onChange={ handleChange }
        />
      </div>
      <button 
      type="button" 
      class="btn"
      onClick={e => handleUrl(e) }
      >
        Encurtar
      </button>
    <div className = 'shortenURL'>
      { url.map((item, index) => (
        <a href={item} target="_blank" key = {index} rel="noreferrer"> {item} </a>
      )) }
    </div>
    </form>
  )
}

export default Shorten;