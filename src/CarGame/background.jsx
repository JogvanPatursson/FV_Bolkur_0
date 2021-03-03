import useState from 'react';
import BackgroundImage from './GameAssets/background_road.png';
import { SpriteAnimator } from 'react-sprite-animator';


export default function Background(width, height) {
	return( <SpriteAnimator
	sprite={BackgroundImage} 
	width={width} 
	height={height}
	fps={8} 
	shouldAnimate={true} 
	wrapAfter={1} 
	frameCount={10} 
	stopLastFrame={false}/>);

}