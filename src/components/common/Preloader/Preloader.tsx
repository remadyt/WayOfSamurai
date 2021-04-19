import React from 'react';
import preloader from "../../../assets/preloader/preloader-user-page.gif";


const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={ {width:50}  }/>
        </div>
    );
};

export default Preloader;