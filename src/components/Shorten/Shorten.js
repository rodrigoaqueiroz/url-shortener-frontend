import './style.css'

import React, { useState } from 'react';
import swal from 'sweetalert';

import getShorten from '../../api.js';

function Shorten() {
  const data = { originURL: ''}
  const [url, setUrl] = useState([]);
  const [originURL, setOriginURL] = useState(data)

  const handleChange = ({ target }) => {
    const { value } = target;
    let newURL = value
    if (value.slice(0,5) !== "https") newURL = `https://${value}`
    setOriginURL({
      originURL: newURL,
    });
  };

  const handleUrl = async () => {
    try {
      if (originURL.originURL.length < 8) return swal('Digite um site válido. ex.: www.google.com')
      const getURL = await getShorten(originURL)
      return setUrl([getURL.shortURL])
    } catch (error) {
    console.log(error);
    };
  }

  return (
    <form className="form-inline">
      <div className="form-group mb-2">
        <label htmlFor="shorten-url" className="sr-only">Email</label>
        <input 
          type="text" 
          readOnly className="form-control-plaintext" 
          id="shorten-url" 
          placeholder="Digite a url. ex.: www.google.com" 
          onChange={ handleChange }
        />
      </div>
      <button 
      type="button" 
      className="btn"
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