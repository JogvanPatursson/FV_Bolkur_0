import { useState } from 'react';
import SpriteAnimator from 'react-sprite-animator';

export default function Animator(props) {
	const [width, setWidth] = useState(0);
	const [height, setheight] = useState(0);
	const [scale, setScale] = useState(0);
	const [sprite, setSprite] = useState("");
	const [fps, setFPS] = useState(0);
	const [stopLastFrame, setStopLastFrame] = useState(false);
	
	if(this.props.width != null) {
		setWidth(this.props.width);
	}
	if(this.props.height != null) {
		setheight(this.props.height);
	}
	if(this.props.scale != null) {
		setScale(this.props.scale);
	}
	if(this.props.sprite != null) {
		setSprite(this.props.sprite);
	}
	if(this.props.fps != null) {
		setFPS(this.props.fps);
	}
	if(this.props.stopLastFrame != null) {
		setStopLastFrame(this.props.stopLastFrame);
	}

	return (<SpriteAnimator 
		sprite={sprite}
		width={width}
		height={height}
		fps={fps}
		scale={scale}
		stopLastFrame={stopLastFrame}
		/>);

}