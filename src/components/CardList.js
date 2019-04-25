import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return(
		<div>
			{
				robots.map((robot, i) => {
					const {id, name, email} = robot;
					return (
						<Card key={`robot${i}`} id={id} name={name} email={email}/>
						)
				})
			}
		</div>
		);
}

export default CardList;