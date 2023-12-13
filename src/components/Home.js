import React from 'react';
import filler from './filler.gif';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='homebg'>



            <img  className="my-3" id='filler' src={filler} alt="Description of the image"/>


            <div>
            <Link type="button" to="/Generator" id='sopbutton' class="container my-5 mx-3 btn btn-info">SOP Generator</Link>
            <Link type="button" to="/GeneratorCL" id='sopbutton' class="container my-5 btn btn-info">Cover Letter Generator</Link>
            </div>


        </div>
    )
}
