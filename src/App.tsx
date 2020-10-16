import React from 'react';
import './App.css';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header, StyledSubTitle, StyledHeaderRule} from './components/Header';

// TODO improve these styled component names haha
// move colors and sizes to a utility file
//
const StyledPublishedDate = styled.h4`
  margin: 0px;
  font-size: small;
  opacity: .7;
  font-variant: petite-caps;
`;
const StyledSideNav = styled.ul`
  list-style: none;
  li { 
    padding: 10px 0;
  }
`;

const StyledPage = styled.div`
  margin: 0 auto;
  width: 1000px;
  background-color: #282c34;
  min-height: 100vh;
  color: antiquewhite;
  p {
    margin-bottom: 3rem;
  }
  a{
    text-decoration: none;
    color: inherit;
    &:hover {
      color: white;
      font-weight: bold;
    }
  }
`;

const StyledColumn = styled.div`
  float: left;
  min-height: 100vh;
  padding: 1rem 0 0 1rem;
  &#left{
    width: 22%;
  }
  &#right{
    width: 70%;
  }
`;


function App() {
  return (
    <Router>
    <div>
      <StyledPage>
        <Header/>
          <div>
            <StyledColumn id="left">
              <StyledSideNav>
                <Link to="/"><li>Ramblings</li></Link>
                <a href="/"><li>Projects</li></a>
                <a href="/"><li>Resume</li></a>
                <a href="/"><li>Contact Me</li></a>
              </StyledSideNav>
            </StyledColumn>
              <StyledColumn id="right">
                <Switch>
                  <Route path="/">
              <h3><a href="/">>> What is Lorem Ipsum?</a></h3>
              <StyledPublishedDate>Published Oct 10th 2020</StyledPublishedDate>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <h3><a href="/">>> What is Lorem Ipsum?</a></h3>
              <StyledPublishedDate>Published Oct 10th 2020</StyledPublishedDate>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <h3><a href="/">>> What is Lorem Ipsum?</a></h3>
              <StyledPublishedDate>Published Oct 10th 2020</StyledPublishedDate>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                  </Route>
                  </Switch>
            </StyledColumn>
          </div>
          <StyledHeaderRule/>
          <StyledSubTitle id="copyright">©2020 All Rights Reserved</StyledSubTitle>
        </StyledPage>
          </div>
            </Router>
    );
}

export default App;
