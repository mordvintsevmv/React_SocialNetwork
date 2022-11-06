import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import {Route, Routes} from "react-router-dom";

const App = (props) => {

  return (
          <div className='app-wrapper'>

              <Header />

              <div className="bottom_part">


                <Nav />

                  <div className="content">

                      <Routes>

                          <Route path="/profile/*" element={<Profile profilePage={props.appState.profilePage}/>} />
                          <Route path="/messages/*" element={<Messages messagePage={props.appState.messagePage} />} />
                          <Route path="/news/*" element={<News />} />
                          <Route path="/music/*" element={<Music />} />
                          <Route path="/settings/*" element={<Settings />} />

                      </Routes>

                  </div>

              </div>


          </div>

  );
}

export default App;
