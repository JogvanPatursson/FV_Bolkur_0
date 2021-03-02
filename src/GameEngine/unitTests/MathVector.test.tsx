import MathVector from '../MathVector'

test('MathVector - add', () => {
    
    // Arrange
    const vector1 = new MathVector(1, 1);
    const vector2 = new MathVector(2, -2);

    // Act
    vector1.add(vector2);

    // Assert
    expect(vector1.getX()).toBe(3);
    expect(vector1.getY()).toBe(-1);

});

test('MathVector - subtract', () => {
    
    // Arrange
    const vector1 = new MathVector(1, 1);
    const vector2 = new MathVector(2, -2);

    // Act
    vector1.subtract(vector2);

    // Assert
    expect(vector1.getX()).toBe(-1);
    expect(vector1.getY()).toBe(3);

});

test('MathVector - setAngle', () => {
    
    // Arrange
    const vector1 = new MathVector(1, 0);

    // Act
    vector1.setAngle(90);
    
    // Assert
    expect(vector1.getY()).toBe(-1);

});

test('MathVector - createDirectionalVector', () => {
    
    // Arrange
    const vector1 = new MathVector(0, 0);

    // Act
    vector1.createDirectionalVector(270, 10);

    // Assert
    expect(vector1.getX()).toBeCloseTo(0);
    expect(vector1.getY()).toBeCloseTo(10);

});

test('MathVector - createVectorFromTwoPoints', () => {
    
    // Arrange
    const vector1 = new MathVector(0, 10);

    // Act
    vector1.createVectorFromTwoPoints(0, 0, 5, 3);

    // Assert
    expect(vector1.getX()).toBe(5);
    expect(vector1.getY()).toBe(3);
});

test('MathVector - dotProduct', () => {
    
    // Arrange
    const vector1 = new MathVector(2, 2);
    const vector2 = new MathVector(2, 3);

    // Act
    let dotProductOfVectors = vector1.dotProduct(vector2);

    // Assert
    expect(dotProductOfVectors).toBe(10);
});

test('MathVector - length', () => {
    
    // Arrange
    const vector1 = new MathVector(0, 5);

    // Act

    // Assert
    expect(vector1.length()).toBe(5);
});

test('MathVector - normalize', () => {
    
    // Arrange
    const vector1 = new MathVector(5, 5);

    // Act
    vector1.normalize();

    // Assert
    expect(Math.round(vector1.length())).toBe(1);
});

test('MathVector - scalarDivision', () => {
    
    // Arrange
    const vector1 = new MathVector(0, 10);

    // Act
    vector1.scalarDivision(2);

    // Assert
    expect(vector1.getY()).toBe(5);
});

test('MathVector - scalarMultiplication', () => {
    
    // Arrange
    const vector1 = new MathVector(0, 10);

    // Act
    vector1.scalarMultiplication(2);

    // Assert
    expect(vector1.getY()).toBe(20);
});