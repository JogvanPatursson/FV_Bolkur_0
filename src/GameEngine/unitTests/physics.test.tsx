import React from 'react';
import { render, screen } from '@testing-library/react';
import Physics from '../Physics';
import PhysicsComponent from '../Physics';

test('Physics - hspeed test', () => {
    
    // Arrange
    const physics = new PhysicsComponent(0, 0);

    // Act
    physics.setHspeed(5);
    physics.update();

    // Assert
    expect(physics.getX()).toBe(5);

});