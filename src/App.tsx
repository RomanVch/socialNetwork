import React from 'react';
import './App.css';
import './normalize.css';
import Header from './componens/Header/Header';
import Nav from './componens/Nav/Nav';
import Maps from './componens/Map/Map';
import {BrowserRouter, Route} from "react-router-dom";
import Balance from "./componens/Balance/Balance";
import FileBox from "./componens/FileBox/FileBox";
import {DialogsContainer} from "./componens/Dialogs/DialogsContainer";
import {ProfileContainer} from "./componens/Profile/ProfileContainer";
import {NavdoubleContainer} from "./componens/Nav-double/Nav-doubleContainer";
import {UsersContainer} from "./componens/users/UsersContainer";


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
            <Route path="/profile" render={()=><ProfileContainer/>}/>
            <Route path="/dialogs/:id" render={()=> <DialogsContainer/>}/>
            <Route path="/maps" render={()=><Maps/>}/>
            <Route path="/balance" render={()=><Balance/>}/>
            <Route path="/fileBox" render={()=><FileBox/>}/>
            <Route path="/users" render={()=><UsersContainer/>}/>
            </div>

            <NavdoubleContainer/>
        </div>
        </BrowserRouter>
    );
}



export default App;
