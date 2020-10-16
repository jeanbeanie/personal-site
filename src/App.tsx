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
import PageBody from './components/PageBody';
import Home from './components/pages/Home';

// TODO improve these styled component names haha
// move colors and sizes to a utility file
//
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
                    <PageBody content={<Home/>} />
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
