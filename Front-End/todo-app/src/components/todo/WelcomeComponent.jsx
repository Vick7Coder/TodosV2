import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

function WelcomeComponent() {
    const {username} = useParams();

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldRestApi(){
        console.log('call')
        //axios
        retrieveHelloWorldPathVariable('Vick7', authContext.token)
            .then((response)=>successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally( () => console.log('cleanup') )

    }
    function successfullResponse(response){
        setMessage(response.data.message)

    }
    function errorResponse(error){
        console.log(error)

    }
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
               Manage your todos - <Link to="/todos">Go here!</Link>
            </div>
            <div>
                <button className='btn btn-success' onClick={callHelloWorldRestApi} style={{display: 'inline-block', width: 'auto'}}>
                    Call Hello World REST API
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent