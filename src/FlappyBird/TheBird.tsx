import { useState } from 'react';
import Entity from '../GameEngine/Entity';
import TextureComponent from '../GameEngine/TextureComponent';
import FlappyBird from '../GameAssets/flappy-bird.png';

function TheBird() {
    const [x, setX] = useState(40);
    const [y, setY] = useState(60);

    return TextureComponent(FlappyBird, x, y, 50, 50);
}

export default TheBird;