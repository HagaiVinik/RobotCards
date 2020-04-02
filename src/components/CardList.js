import React from 'react';
import Card from './Card';


const CardList = ({robots, noRobotsText}) => {
    noRobotsText = noRobotsText || 'No Robots';
    return (
        <div className="card-list tc">
            {
                (!robots.length)
                    ? <h1>{noRobotsText}</h1>
                    : robots.map((user) => (
                        <Card
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            imageUrl={user.imageUrl}
                        />
                    ))
            }
        </div>
    );
};

export default CardList;
