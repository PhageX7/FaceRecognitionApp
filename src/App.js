import Navigation from './components/navigation/Navigation';
import SignIn from './components/signin/SignIn';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Logo from './components/logo/Logo';
import Register from './components/register/Register';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';
import React, { Component } from 'react';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
	apiKey: 'adcf10b293f44b9dac0d221b69a8d122'
});

const particles = {
	polygon: {
		enable: true,
		type: 'inside',
		move: {
			radius: 10
		},
		url: 'path/to/svg.svg',
		draw: {
			enable: true
		},
		inline: {
			arrangement: 'random-length'
		},
		line_linked: {
			shadow: {
				enable: true,
				color: '#3CA9D1',
				blur: 5
			}
		}
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageURL: '',
			box: {},
			route: "signin",
		};
	}

	onChangedInput = (event) => {
		
		this.setState({input: event.target.value});
		console.log(this.state.input);
	};

	onButtonSubmit = () => {
		console.log('button clicked');
		this.setState({imageURL: this.state.input});
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then(response => this.boundingBoxData(this.caluculateFaceLocation(response)))
			.catch(err => console.log(err));
	};	

	caluculateFaceLocation  = (data) => {
		const boundingBox = data.outputs[0].data.regions[0].region_info.bounding_box;
		console.log(boundingBox);
		const selectedimage = document.getElementById('selectedimage');
		const width = Number(selectedimage.width);
		const height = Number(selectedimage.height);
		console.log(width, height);

		return {
			leftCol: boundingBox.left_col * width,
			topRow:  boundingBox.top_row * height,
			rightCol: width - (boundingBox.right_col * width),
			bottomRow: height - (boundingBox.bottom_row * height),
		}
	} 

	boundingBoxData = (box) => {
		this.setState({box: box});
		console.log(this.state.box);
	}

	onRouteChange = (route) => {
		this.setState({route: route});
	}

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={{ particles }} />
				<Navigation onRouteChange={this.onRouteChange}/>
				
				{(this.state.route === "home") ? 
				<div>
					<Logo />				
					<Rank />
					<ImageLinkForm onChangedInput={this.onChangedInput} onButtonSubmit={this.onButtonSubmit} />
					<FaceRecognition imageURL={this.state.imageURL} box={this.state.box}/>	
				</div>	
				: ((this.state.route === "signin") ? 
					<SignIn onRouteChange={this.onRouteChange}/>
					: <Register onRouteChange={this.onRouteChange}/>)	
				}					
			</div>
		);
	}
}

export default App;
