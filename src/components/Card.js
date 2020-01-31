import React from 'react';

const Card = (props) => {
	return (
		<div className = 'bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2' >
			<img alt = 'robots' src = {`https://robohash.org/${props.id}tesfwedcds?200x200`}/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;