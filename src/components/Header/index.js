import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Container } from './styles';

const Header = () => {

  return (
    <Container>
      <header>
        <a href="https://github.com/biacrisg" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faGithub} size='2x'  />
      </a>
      <a href="https://www.linkedin.com/in/beatriz-cristina-gon%C3%A7alves-4a4b609b/" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faLinkedin}  size='2x'/>
      </a>
      </header>
    </Container>
  );
}

export default Header;