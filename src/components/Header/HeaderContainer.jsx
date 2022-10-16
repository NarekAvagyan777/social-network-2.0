import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authMeCreator, logoutCreator } from "../../redux/reducers/authReducer";

const HeaderContainer = (props) => {
    useEffect(() => {
        props.authMeCreator()
    }, [])
    return <Header me={props.me} logoutCreator={props.logoutCreator}/>
}

let mapStateToProps = (state) => {
    return {
        me: state.authPage.me
    }
}

export default connect(mapStateToProps, {
    authMeCreator, logoutCreator
})(HeaderContainer);