import React from 'react';
//import PropTypes from 'prop-types';
//import NotFound from './NotFound';

//Photo component that displays the li and img elements 
function Photo(props) {
        return(
            <li>
                <img src={props.url} alt='' />
            </li>
        );
    
}
export default Photo;