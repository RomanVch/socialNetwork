import React from 'react';
import './App.css';
import './normalize.css';
import Header from './componens/Header/Header';
import Nav from './componens/Nav/Nav';
import Maps from './componens/Map/Map';
import {BrowserRouter, Route} from "react-router-dom";
import Balance from "./componens/Balance/Balance";
import {WithAuthDialogsRedirectHOC} from "./componens/Dialogs/DialogsContainer";
import {WithAuthProfileRedirectHOC} from "./componens/Profile/ProfileContainer";
import {NavdoubleContainer} from "./componens/Nav-double/Nav-doubleContainer";
import { WithAuthRedirectHOC} from "./componens/users/UsersContainer";
import LoginPage from "./componens/LoginPage/LoginPage";


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
            <Route path="/profile/:userId?" render={()=><WithAuthProfileRedirectHOC/>}/>
            <Route path="/dialogs/" render={()=> <WithAuthDialogsRedirectHOC/>}/>
            <Route path="/maps" render={()=><Maps/>}/>
            <Route path="/balance" render={()=><Balance/>}/>
            <Route path="/users" render={()=><WithAuthRedirectHOC/>}/>
            <Route path="/login" render={()=><LoginPage/>}/>
            </div>

            <NavdoubleContainer/>
        </div>
        </BrowserRouter>
    );
}



export default App;
