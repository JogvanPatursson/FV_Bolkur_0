import Debug from '../Debug'

test('debug get Test', () => {
    let message:string = "This is a test message";
    let value : number = 1;

    // Arrange
    let debug = new Debug(message, value);

    // Assert
    expect(debug.getMessage()).toBe("This is a test message");
    expect(debug.getValue()).toBe(1);
});

test('debug setValue test', () => {
    // Arrange
    let message:string = "This is a test message";
    let value : number = 1;
    let debug = new Debug(message, value);

    // Act
    debug.setValue(2);

    // Assert
    expect(debug.getValue()).toBe(2);
});