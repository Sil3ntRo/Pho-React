import {useEffect, useState} from 'react'

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthenticaion() {
    const [authenticated, setAuthenticated] = useState('loading');

    function login() {
        auth.signInWithPopup(provider);
    }

    useEffect(() => {
        auth.onAuthStateChanged(function(user){
            if(user) {
                setAuthenticated(user);
            }
            else {
                setAuthenticated();
            }
        }, function(error){
            console.log(error);
        });
    }, []);

    return {login, loggedIn: authenticated};
}

/*
 auth.onAuthStateChanged(function(user){
            console.log(user);
        }, function(error) {
            console.log(error);
        });
 */