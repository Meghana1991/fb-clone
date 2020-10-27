import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
                // console.log(result.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img className="logo__img" src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="" />

                <img className="logo__text" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login