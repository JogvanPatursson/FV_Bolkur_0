import React, { useState } from 'react';
import TheBird from '../src/FlappyBird/TheBird';
import { SpriteAnimator } from 'react-sprite-animator';
import Flappy from './GameAssets/theGirl.png';

const App: React.FC = () => {
    return <SpriteAnimator sprite={Flappy} width={256} height={256} scale={2} fps={10} shouldAnimate={true}></SpriteAnimator>;
};

export default App;

