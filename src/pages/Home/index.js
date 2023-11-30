import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TimeLine from '../../components/TimeLine';


import { 
  Container, 
  Content, 
  Skills, 
  Card, 
  ContactContainer, 
  PortfolioArea, 
  PortfolioList,
  StudyArea 
} from './styles';


const Home = () => {

  return (

    <Container>
      <Header/>

        <Content>
            <div className="intro">
              <Fade top>
                {/* <h1>ME CONHEÇA</h1> */}
              </Fade>

            </div>

          <Fade bottom>
            <strong>
            Apresentando as tecnologias que estou explorando e aplicando em meus projetos de programação
            </strong>
          </Fade>

          <Fade left>
            <Skills>
              
              <div className="skills">
                <Card>
                  <i className="devicon-javascript-plain colored" />
                  <Fade bottom>
                    <h2>Javascript</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-nodejs-plain colored" />
                  <Fade bottom>
                  <h2>Node</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-typescript-plain colored" />
                  <Fade bottom>
                    <h2>Typescript</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-git-plain colored"/>
                  <Fade bottom>
                    <h2>Git</h2>
                  </Fade>
                </Card>


                <Card>
                  <i className="devicon-react-original colored" />
                  <Fade bottom>
                    <h2>React</h2>
                  </Fade>
                </Card>

                
                <Card>
                  <i className="devicon-nestjs-plain colored" />
                  <Fade bottom>
                    <h2>NestJs</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-mysql-plain colored" />
                  <Fade bottom>
                    <h2>MySql</h2>
                  </Fade>
                </Card>

              
              </div>
            </Skills>
          </Fade>

           <Fade top>
              <h1> Formação acadêmica</h1>
            </Fade>
          
          <Fade left>
            <StudyArea>
              <TimeLine />
            </StudyArea>
          </Fade>
                 

        </Content>

      <Footer/>

    </Container>

  );
}

export default Home;