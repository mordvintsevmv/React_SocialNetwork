import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = (props) => {

    return (
          <div className='app-wrapper'>

              <Header />

              <div className="bottom_part">


                <Nav />

                  <div className="content">

                      <Routes>

                          <Route path="/profile/*" element={<Profile store={props.store} />} />
                          <Route path="/messages/*" element={<MessagesContainer store={props.store} />} />
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
