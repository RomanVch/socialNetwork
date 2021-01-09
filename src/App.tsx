import React from 'react';
import './App.css';
import './normalize.css';
import Profile from './componens/Profile/Profile';
import Header from './componens/Header/Header';
import Nav from './componens/Nav/Nav';
import NavDouble from './componens/Nav-double/Nav-double';
import Dialogs from './componens/Dialogs/Dialogs';
import Maps from './componens/Map/Map';
import {BrowserRouter, Route} from "react-router-dom";
import Balance from "./componens/Balance/Balance";
import FileBox from "./componens/FileBox/FileBox";
import {typeStore} from "../src/redux/state";

type propsType= {
    store: typeStore;
}


function App(props:propsType) {
    const Route = require("react-router-dom").Route;
    return (
        <BrowserRouter>
        <div className="main__grid" >
            <Header/>
            <Nav/>
            <div className="content">
            <Route path="/profile" render={()=>{ return <Profile addPostState={props.store.addPostState.bind(props.store)} mediaMessage={props.store.getState().post} upPostState={props.store.upPostState.bind(props.store)} textMessage={props.store.getState().text.textPost}/>}}/>
            <Route path="/dialogs" render={()=>{ return <Dialogs PropsFriend={props.store.getState().PropsFriend} PropsMessage={props.store.getState().PropsFriendMessage} addMessage={props.store.addMessage.bind(props.store)} upAddMessage={props.store.upAddMessage.bind(props.store)} txtMsg={props.store.getState().text.textMessage}/>}}/>
            <Route path="/maps" render={()=><Maps/>}/>
            <Route path="/balance" render={()=><Balance/>}/>
            <Route path="/fileBox" render={()=><FileBox/>}/>
            </div>
            <NavDouble PropsFriend={props.store._state.PropsFriend}/>
        </div>
        </BrowserRouter>
    );
}



export default App;
