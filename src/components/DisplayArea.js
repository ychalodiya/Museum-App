import React, { Component } from 'react';
import { identifier } from '@babel/types';

// If there is nothing to display: 
// <div className="noResults">
// 	<p>Please enter a search term.</p>
// </div>

// If there are results to display:
//<div className="showResults">
//	<p>Showing results for:</p>
//	<div className="artworks">
//	... results go here
//	</div>
//</div>

// Each piece of art should have structure:
// <div className="art">
// 	<img src="" alt=""/>
// 	<h2>Title</h2>
// 	<h3>Artist</h3>
// </div>

function DisplayArea(props) {

		return (
			<div className="displayArea" >
				{
					props.art.length > 0 ? (
						<div className="showResults">
							<p>Your Result Arts: { props.currentSearch }</p>
							<div className="artworks">
								{
									props.art.map( item => {
								
									const {
										id, title, webImage, principalOrFirstMaker: artist
									} = item;

									
									return (
										<div key={id} className="art">
											<img src={webImage.url} alt=""/>
											<h2>{title}</h2>
											<h3>{artist}</h3>
										</div>
									);
									})
								}
							</div>
						</div>
					) : (
						<div className="noResults">
							<p> First Enter Your Favourite Search Term </p>
						</div>
					)
				}
			</div>
		);
}

export default DisplayArea;