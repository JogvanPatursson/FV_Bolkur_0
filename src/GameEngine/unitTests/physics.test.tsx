import React from 'react';
import { render, screen } from '@testing-library/react';
import Physics from '../Physics';
import PhysicsComponent from '../Physics';
import MathVector from '../MathVector';

test('Physics - hspeed test', () => {
    
    // Arrange
    const physics = new PhysicsComponent(0, 0);

    // Act
    physics.setHspeed(5);
    physics.update();
    physics.update();

    // Assert
    expect(physics.getX()).toBe(10);

});

test('Physics - vspeed test', () => {
    
    // Arrange
    const physics = new PhysicsComponent(0, 0);

    // Act
    physics.setVspeed(5);
    physics.update();
    physics.update();

    // Assert
    expect(physics.getY()).toBe(10);

});

test('Physics - applyDirectionalForce test', () => {
    
    // Arrange
    const physics = new PhysicsComponent(0, 0);

    // Act
    physics.applyDirectionalForce(270, 5);
    physics.update();

    // Assert
    expect(physics.getY()).toBe(5);

});

test('Physics - applyForceTowardsPoint test', () => {
    
    // Arrange
    const physics = new PhysicsComponent(0, 0);

    // Act
    physics.applyForceTowardsPoint(5, 0, 5);
    physics.update();

    // Assert
    expect(physics.getX()).toBe(5);

});

test('Physics - setGravity test', () => {
    
    // Arrange
    const physics = new PhysicsComponent(0, 0);

    // Act
    physics.setGravity(1);
    physics.update();
    physics.update();

    // Assert
    expect(physics.getY()).toBe(3);

});

test('Physics - setGravityDirection test', () => {
    
    // Arrange
    const physics = new PhysicsComponent(0, 0);

    // Act
    physics.setGravityDirection(0);
    physics.setGravity(1);
    physics.update();
    physics.update();

    // Assert
    expect(physics.getX()).toBe(3);

});