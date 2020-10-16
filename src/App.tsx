import React from 'react';
import './App.css';
import styled from 'styled-components';


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
  &#copyright {
    opacity: .5;
    width: 100%;
    margin: 2rem 0;
    text-align: center;
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
    &:hover{
      background-color: burlywood;
    }
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
  margin: 40px 0 0 2rem;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmY6v-1ADIkVtKd_RvDjcyCCGW6MG9YAXG0g&usqp=CAU)
`;

function App() {
  return (
    <div className="App">
      <StyledPage>
        <header id="header">
          <StyledAvatar/ >
          <TitleAndSocialList>
            <StyledSiteTitle><a href="#"> Jeane Ramos </a></StyledSiteTitle>
          <StyledSubTitle> Thinker - Engineer - Artist </StyledSubTitle> 
          <StyledSocialLinks>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <li id="twitter-icon"/> 
              </a>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <li id="github-icon"/> 
              </a>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <li id="linkedin-icon"/> 
              </a>
              </StyledSocialLinks>
            </TitleAndSocialList>

          </header>
          <StyledHeaderRule/>
          <div>
            <StyledColumn id="left">
              <StyledSideNav>
                <a href="#"><li>Ramblings</li></a>
                 <a href="#"><li>Projects</li></a>

                 <a href="#"><li>Resume</li></a>

                 <a href="#"><li>Contact Me</li></a>

              </StyledSideNav>
            </StyledColumn>
              <StyledColumn id="right">
                <h3><a href="#">>> What is Lorem Ipsum?</a></h3>
                  <StyledPublishedDate>Published Oct 10th 2020</StyledPublishedDate>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                  <h3><a href="#">>> What is Lorem Ipsum?</a></h3>
                  <StyledPublishedDate>Published Oct 10th 2020</StyledPublishedDate>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                  <h3><a href="#">>> What is Lorem Ipsum?</a></h3>
                  <StyledPublishedDate>Published Oct 10th 2020</StyledPublishedDate>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </StyledColumn>
          </div>
            <StyledHeaderRule/>
              <StyledSubTitle id="copyright">©2020 All Rights Reserved</StyledSubTitle>
      </StyledPage>
    </div>
  );
}

export default App;
