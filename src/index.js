import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import LeftPanel from './scripts/left-panel';
import RightPanel from './scripts/right-panel';
import MainPanel from './scripts/main-panel';

const serverUrl = 'https://38247136-20e0-451c-959f-85c5064bbc11.mock.pstmn.io/data';

fetch(serverUrl, {method: 'POST'})
  .then(res=>res.json())
  .then(data=>ReactRender(data))
  .catch(err=>{
    console.log(err);
    ReactRender(null);
  });

function MainPage(props){
  let [page, setPage] = useState(0);
  const updateCurrentPage = (index) => setPage(index);

  return (
    <div className = "main-content">

    <LeftPanel class = "left-panel" updatePage = {updateCurrentPage} key={0}/>
    <MainPanel class = "main-panel" data={props.data} page={page} key={1}/>
    <RightPanel class = "right-panel" data={props.data} key={2}/>

    </div>
  );
}

function ReactRender(data){
  console.log(data);
  ReactDOM.render(
    <React.StrictMode><MainPage data={data}/></React.StrictMode>,
    document.querySelector('#root'),
  );
}



