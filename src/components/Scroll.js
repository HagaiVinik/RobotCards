import React from 'react';


const Scroll = ({children}) => {
    return (
        <div style={{overflowY: 'Scroll', height: '1000px'}}>
            {children}
        </div>
    );
}

export default Scroll;
