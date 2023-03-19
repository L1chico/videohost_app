import './App.css';
import Header from './Header/Header';
import LeftSideMenu from './LeftSideMenu/LeftSideMenu';
import VideoRecomend from './VideoRecomend/VideoRecomend';

import {BrowserRouter as Router, Routes, Route} from  "react-router-dom";

function App() {
  return (
    <div className='container'>
      {/* <Header></Header>
      <LeftSideMenu></LeftSideMenu> */}
      <Router>
        <Routes>
          <Route path = "/" element={[<Header key={"Header"}/>,<LeftSideMenu key={"LeftSideMenu"}/> ,<VideoRecomend key={"VideoRecomend"}/>]}/>
          <Route path = "/subscriptions" element={[<Header key={"Header"}/>,<LeftSideMenu key={"LeftSideMenu"}/>]}/>
          <Route path = "/catalog" element={[<Header key={"Header"}/>,<LeftSideMenu key={"LeftSideMenu"}/>]}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
