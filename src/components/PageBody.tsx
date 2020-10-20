import React from 'react';

// TODO will possibly add general page logic to this component at a later point

function PageBody (props: {content:JSX.Element}){
  return(
    <div>{props.content}</div>);
};

export default PageBody;

