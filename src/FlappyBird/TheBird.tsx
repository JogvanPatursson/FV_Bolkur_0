import { useState, useEffect } from 'react';
import Entity from '../GameEngine/Entity';
import TextureComponent from '../GameEngine/TextureComponent';
import FlappyBird from '../GameAssets/flappy-bird.png';
import phySetX from '../GameEngine/Physics';
import phyGetX from '../GameEngine/Physics';
import PhysicsComponent from '../GameEngine/Physics';


function TheBird() {

    const physics = new PhysicsComponent(0, 0);
    physics.update();

    return TextureComponent(FlappyBird, physics.getX(), physics.getY(), 50, 50);
}

export default TheBird;