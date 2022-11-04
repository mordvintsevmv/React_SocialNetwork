import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages'

const App = () => {
  return (
      <div className='app-wrapper'>

          <Header />
          <Nav />

          <div className="content">

              {/*<Profile />*/}
              <Messages />

          </div>


      </div>

  );
}

export default App;
