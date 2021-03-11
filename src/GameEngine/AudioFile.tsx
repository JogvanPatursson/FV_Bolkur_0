/*
*   File    :   AudioFile.tsx
*   Author  :   Harald í Kálvalíð 
*   Purpose :   This class is for playing audio such as music and sound effects
*               in the game engine. It takes two arguments for construction.
*               It needs an audio filename and a number. The audio filename should
*               include a path for the audio file (which should be public) and the
*               number (copies) represents how many copies of an audio sample it should
*               make. In short, this class grants you the ability to play audio and loop it.
*               Wether an audio file is a sound effect or music takes place during
*               construction of the object.
*/

export default class AudioFile {

    //========================================================
    // Variables
    //========================================================
    private x:number = 0;
    private zero:number = 0;
    private sound:any;                      // the actual sound we are going to play
    private arraySize:number = 0;           // the size of the audio pool (array)
    private soundArray: Array<any> = [];    // the audio pool to store our sounds (array)
    private count : number = 0;             // a counter to point at the next element in the array
    private isMusic : boolean = false;
    private soundEffect:any;


    //========================================================
    // constructor
    //========================================================
    constructor(filename:string, copies:number) {
        // creating the audio file
        this.sound = new Audio(filename)

        // error handeling of the input value
        // this can be changed at will.
        if (copies < 1) {
            copies = 1;
        }

        if (copies > 128) {
            copies = 128;
        }

        // if there is only one copy of the audio file then it means that it's music.
        // it will only create one sound to be played instead of an array of audio copies
        if (copies == 1) {
            this.sound = new Audio(filename);
            this.isMusic = true;
        } else {
            // a for loop to make multiple copies of the audio file
            // and put it in the soundArray
            for (this.x = this.zero; this.x < copies; this.x++) {
                this.soundArray.push(new Audio(filename));
            }

            this.arraySize = this.soundArray.length; 

        }
    }


    //========================================================
    // member functions
    //========================================================
    
    // This is for playing the audio. A boolean is used to determine how it should play audio
    // if it's music, it will only play the audio once
    // else it must be an audio effect and a sound array is used to play the multiple copies of audio
    // a counter is used to iterate through the sound array each time an audio effect is to be played.
    public playAudio() : void {
        if (this.isMusic) {
            this.sound.play();
        } else {
            this.soundEffect = this.soundArray[this.count];
            this.soundEffect.play();
            this.count += 1;
            this.count = this.count % this.arraySize; // using modulus to make sure it doesn't go past the array length
        }
    }

    // This is for looping audio. This only works for music.
    public loopAudio() : void {
        if (this.isMusic) {
            this.sound.loop = true;
        }
    }
}