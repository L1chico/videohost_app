import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Header/Header';
import LeftSideMenu from './LeftSideMenu/LeftSideMenu';
import VideoRecomend from './VideoRecomend/VideoRecomend';

console.info(React.version);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header></Header>
    <LeftSideMenu></LeftSideMenu>
    <VideoRecomend></VideoRecomend>
  </React.StrictMode>
);
