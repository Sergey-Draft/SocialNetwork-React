import React from 'react';
import preloader from '../../img/preloader.svg'


let Preloader = () => {

    return (
       <div style={{zIndex:1000, position: 'relative', top: '10%', left: '30%', height: '100vh', backgroundColor: '#fff' }} > <img src={preloader} alt='preloader...'/> </div> 
    )
} 

export default Preloader;