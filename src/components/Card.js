import React from 'react';

const Card = ({name, email, imageUrl}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2'>
            <img alt='robots' src={imageUrl}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
