import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
	return (
		<div className="center">
			<div className="detectImage mt2">
				<img id="selectedimage"  alt="" src={imageURL} />
				<div
					className="bounding-box"
					style={{ left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow }}
				/>
			</div>
		</div>
	);
};

export default FaceRecognition;
