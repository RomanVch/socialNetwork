import React, {ChangeEvent, useState} from 'react';
import {typePropsFriendObject} from "../../redux/store";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import NavDouble from "./Nav-double";


type MSPType = {
    PropsFriend:typePropsFriendObject[]
}
let mapStateProps = (state: AppStateType):any => {
    return {
        PropsFriend:state.friendMessage.PropsFriend
    }
}

export const NavdoubleContainer = connect<any,{},{},AppStateType>(mapStateProps)(NavDouble)
