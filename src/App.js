import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = () => {

    return (<div className='app-wrapper'>

            <HeaderContainer/>

            <div className="bottom_part">

                <Nav/>

                <div className="content">

                    <Routes>

                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":userID" element={<ProfileContainer/>}/>
                        </Route>

                        <Route path="/messages" element={<MessagesContainer/>}>
                            <Route path=":dialogueID" element={<MessagesContainer/>}/>
                        </Route>

                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>

                    </Routes>

                </div>

            </div>


        </div>

    );
}

export default App;
