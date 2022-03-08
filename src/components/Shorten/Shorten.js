import React, { useState } from 'react';
import './style.css'
import getShorten from '../../api.js'

const Shorten = () => {
  const data = { originURL: ''}
  const [originURL, setOriginURL] = useState(data)

  const handleChange = ({ target }) => {
    const { value } = target;
    setOriginURL({
      originURL: value,
    });
  };

  const handleUrl = async () => {
    try {
      const getURL = await getShorten(originURL)
      console.log(getURL.shortURL)
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
      onClick={ handleUrl }
      >
        Encurtar
      </button>
    </form>
  )
}

export default Shorten;