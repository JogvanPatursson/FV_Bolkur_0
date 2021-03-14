/*
File    :   audioFile.test.tsx
Purpose :   This is for testing the audio class
*/

import AudioFile from '../AudioFile';

// testing if the audio is music
test('audio is music test', () => {
    // Arrange
    const audio = new AudioFile("test", 1);

    // Assert
    expect(audio.getIsMusic()).toBe(true);
});

// testing if the audio is sound effect
test('audio is sound effect test', () => {
    // Arrange
    const audio = new AudioFile("test", 2);

    // Assert
    expect(audio.getIsMusic()).toBe(false);
});

// testing if the audio filename matches
test('audio filename test', () => {
    // Arrange
    const audio = new AudioFile("test", 1);

    // Assert
    expect(audio.getFilename()).toBe("test");
});

// testing if the counter works
test('audio count test', () => {
    // Arrange
    const audio = new AudioFile("test", 5);

    // Act
    audio.playAudio();
    audio.playAudio();
    audio.playAudio();
    audio.playAudio();
    audio.playAudio();

    // Assert
    expect(audio.getCount()).toBe(0);
});

// testing the array size
test('audio array size test', () => {
    // Arrange
    const audio = new AudioFile("test", 5);

    // Assert
    expect(audio.getArraySize()).toBe(5);
});