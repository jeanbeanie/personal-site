import React from 'react';
import './App.css';
import styled from 'styled-components';


// TODO improve these styled component names haha
// move colors and sizes to a utility file
//
const StyledSiteTitle = styled.h1`
  font-size: 50px;
  float: left;
  margin: 40px 0 0 2rem;
`;

const StyledSubTitle = styled.h2`
  font-size: 20px;
  float: left;
  margin-left: 2rem;
  margin-bottom: 0px;
  margin-top: 14px;
  font-variant: petite-caps;
  font-weight: 300;
}
`;

const StyledPage = styled.div`
  margin: 0 auto;
  width: 1000px;
  background-color: #282c34;
  min-height: 100vh;
  color: antiquewhite;
`;

const TitleAndSocialList = styled.div`
  float: left;
  width: 500px;
  margin-left: 20px;
  display: block;
`;

const StyledSocialLinks = styled.ul`
  float: left;
  list-style: none;
  padding-left: 0;
  display: flex;
  margin: 25px 0 0 3px;
  li {
    height: 50px;
    width: 50px;
    margin: 0 9px 0 2rem;
    background-size: contain;
    border-radius: 20%;
    background-color: white;
    opacity: 0.7;
  }
  li#twitter-icon{
    background-image: url(https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Tumblr5_svg-256.png)
  }
  li#github-icon {
    background-image: url(https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Reddit2_svg-256.png)
  }
  li#linkedin-icon {
    background-image: url(https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-256.png);
  }
`;

const StyledHeaderRule = styled.hr`
  float: left;
  width: inherit;
  margin-top: 25px;
  opacity: 0.1;
  border: 1px solid burlywood;
  border-style: dashed;
`;

const StyledAvatar = styled.div`
  border: 1px solid black;
  float: left;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 40px 0 0 0;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmY6v-1ADIkVtKd_RvDjcyCCGW6MG9YAXG0g&usqp=CAU)
`;

function App() {
  return (
    <div className="App">
      <StyledPage>
        <header id="header">
          <StyledAvatar/ >
          <TitleAndSocialList>
          <StyledSiteTitle> Jeane Ramos </StyledSiteTitle>
          <StyledSubTitle> Thinker - Engineer - Artist </StyledSubTitle> 
          <StyledSocialLinks>
            <li id="twitter-icon"> 
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </li>
            <li id="github-icon"> 
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </li>
            <li id="linkedin-icon"> 
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </li>
              </StyledSocialLinks>
            </TitleAndSocialList>

          </header>
          <StyledHeaderRule/>
      </StyledPage>
    </div>
  );
}

export default App;
