import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'
import UsersContainer from './components/Users/UsersContainer'
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import {useEffect} from "react";
import {connect} from "react-redux";
import {initialiseApp} from "./redux/appReducer";
import Loading from "./components/Loading/Loading";

const App = (props) => {

    useEffect(() => {
        props.initialiseApp();
    }, [])

    if (!props.app.isInitialised){
        console.log("start")
        console.log(props.app.isInitialised)
        return <Loading/>
    }else {
        console.log("stop")
        console.log(props.app.isInitialised)

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

                            <Route path="/login" element={<Login/>}/>


                        </Routes>

                    </div>

                </div>


            </div>

        );
    }
}

const mapStateToProps = (state) =>{
    return {
        app: state.app
    }
}
const mapDispatchToProps = {
    initialiseApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
