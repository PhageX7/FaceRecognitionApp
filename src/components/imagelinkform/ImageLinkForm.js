import React from 'react';
import './ImageLickForm.css';

function ImageLinkForm({onChangedInput, onButtonSubmit}) {
	return (
		<div>
			<p className="fw7 f5 center">{'This Brain will detect faces from your pictures. Give it a try!'}</p>
			<div className="input-form center shadow-5 br3">
				<div className="center pa4">
					<input onChange={onChangedInput}className="f2 pa1 w-70 center" type="text" />
					<button onClick={onButtonSubmit} className="w-30 grow f4 link ph3 pa1 dib white bg-light-purple">Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
