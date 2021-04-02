import './landing.css'

import React from 'react';
import { Link } from 'react-router-dom';
import MainForm from '../mainForm/mainForm'
import loneFunction from '../../utilities/loneFunction'

const Landing = () => {
    loneFunction();
    return (
        <div className="landing">
            <Link className="landing__link" to="/main">Ir al main</Link>
        </div>
    )
}

export default Landing;