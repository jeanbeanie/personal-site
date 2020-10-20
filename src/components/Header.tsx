import React from 'react';
import styled from 'styled-components';

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

export const StyledHeaderRule = styled.hr`
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

const StyledSiteTitle = styled.h1`
  font-size: 50px;
  float: left;
  margin: 40px 0 0 2rem;
`;

export const StyledSubTitle = styled.h2`
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


export function Header() {
  return (
    <React.Fragment>
        <header id="header">
          <StyledAvatar/ >
          <TitleAndSocialList>
            <StyledSiteTitle><a href="/"> Jeane Ramos </a></StyledSiteTitle>
          <StyledSubTitle> Thinker - Engineer - Artist </StyledSubTitle> 
          <StyledSocialLinks>
              <a
                className="App-link"
                href="https://twitter.com/onlyjeanbean"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <li id="twitter-icon"/> 
              </a>
              <a
                className="App-link"
                href="https://github.com/jeanbeanie"
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
      </React.Fragment>
   )
  }
