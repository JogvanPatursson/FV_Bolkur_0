import React from 'react';
import Physics from '../Physics';
import Entity from '../Entity';
import EntityList from '../EntityList';
import Collision from '../Collision';

/*
test('collisionBoxCheck Test', () => {
    // Arrange
    const collisionObject = new Collision;


    // Act

    // Assert
});
*/

test('collides test', () => {
    // Arrange
    const entityObject1 = new Entity(1, 'example', 0, 0, 10, 10);
    const entityObject2 = new Entity(2, 'example', 0, 0, 10, 10);
    const entityListObject = new EntityList();
    entityListObject.pushArray(entityObject2);

    // Act
    entityObject1.collides(entityListObject);

    // Assert
    expect(entityObject1.collides(entityListObject)).toBe(true);
});