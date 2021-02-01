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


type propsType= {
    store: any;
    dispatch:(active:any)=>void
}


function App(props:propsType) {

    return (
        <BrowserRouter>
        <div className="main__grid" >
            <Header/>
            <Nav/>
            <div className="content">
            <Route path="/profile" render={()=>{ return <Profile
                dispatch={props.dispatch}
                mediaMessage={props.store.getState().post.postes}
                textMessage={props.store.getState().post.textPost}/>}}/>
            <Route path="/dialogs" render={()=>{ return <Dialogs
                dispatch={props.dispatch}
                PropsFriend={props.store.getState().friendMessage.PropsFriend}
                PropsMessage={props.store.getState().friendMessage.PropsFriendMessage}
                txtMsg={props.store.getState().friendMessage.textMessage}/>}}/>
            <Route path="/maps" render={()=><Maps/>}/>
            <Route path="/balance" render={()=><Balance/>}/>
            <Route path="/fileBox" render={()=><FileBox/>}/>
            </div>
            <NavDouble PropsFriend={props.store.getState().friendMessage.PropsFriend}/>
        </div>
        </BrowserRouter>
    );
}



export default App;
