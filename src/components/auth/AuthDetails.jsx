import React, {useState, useEffect} from 'react'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged, updateCurrentUser, signOut } from 'firebase/auth'
import { Route } from 'react-router'
import Chat from '../../pages/chat/chat'

const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null)

    //Check if user is signed up and Authorized
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })

        return () => {
            listen();
            <Route path='chat' element={<Chat/>}/>
        }
    }, [])

    
    useEffect(() => {
        
    })

    //Sign out user
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out')
        }).catch(error => console.log(error))
    }

  return (
<></>
  )
}

export default AuthDetails