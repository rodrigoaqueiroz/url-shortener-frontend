import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands'; 
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import './style.css'
const About = () =>{
  const github = <FontAwesomeIcon icon={ faGithub } />
  const linkedin = <FontAwesomeIcon icon={ faLinkedin } />
  const mail = <FontAwesomeIcon icon={ faMailBulk } />
  return (
    <>
      <div className='about'>
        <h1>About</h1>
          <div className = 'mainPage'>
          <p> Olá, eu sou Rodrigo de A. Queiroz </p>
            { 
            <ul>
              <a className="github" href="https:github.com/rodrigoaqueiroz" target="_blank" rel="noreferrer"><ul> { github } </ul></a>
              <a className="linkedin" href="https://www.linkedin.com/in/rodrigoandradequeiroz/" target="_blank" rel="noreferrer"><ul> { linkedin } </ul></a>
              <a className="email" href="mailto:rodrigoandradequeiroz@gmail.com" target="_blank" rel="noreferrer"><ul>{ mail } </ul></a>
            </ul> 
            }  
          </div>
        </div>
    </>
  );
}

export default About;