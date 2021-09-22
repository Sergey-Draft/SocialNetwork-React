import React from 'react';
import preloader from '../../img/preloader.svg'


let Preloader = () => {

    return (
       <div style={{zIndex:1000, position: 'fixed' }} > <img src={preloader} alt='preloader...'/> </div> 
    )
} 

export default Preloader;