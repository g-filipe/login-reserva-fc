import React from 'react';
import "./NotFound.css"
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

const NotFound = () => {
return(

    <div className='NotFound'>
        <h1 className ='NFtext'>404 - Not Found!</h1>
        <Link to="/" className = 'goHome'>
            <Button>
            Página inicial
            </Button>
        </Link>
    </div>

)
}


export default NotFound;

