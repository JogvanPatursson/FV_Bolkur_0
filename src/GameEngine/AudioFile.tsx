
export default class AudioFile {

    // Variables
    private x:number = 0;
    private zero:number = 0;
    private sound:any;                      // the actual sound we are going to play
    private arraySize:number = 0;           // the size of the audio pool (array)
    private soundArray: Array<any> = [];    // the audio pool to store our sounds (array)
    private count : number = 0;             // a counter to point at the next element in the array
    private isMusic : boolean = false;

    // constructor
    constructor(filename:string, arrayLength:number) {
        // creating the audio file

        this.sound = new Audio(filename)

        // error handeling of the input value
        if (arrayLength < 1) {
            arrayLength = 1;
        }

        if (arrayLength > 128) {
            arrayLength = 128;
        }

        if (arrayLength == 1) {
            this.sound = new Audio(filename);
            this.isMusic = true;
        } else {
            // a for loop to make multiple copies of the audio file
            for (this.x = this.zero; this.x < arrayLength; this.x++) {
                this.soundArray.push(new Audio(filename));
            }

            this.arraySize = this.soundArray.length; 
        }

            

    }

    // member functions
    
    // for playing the audio
    public playAudio() : void {
        if (this.isMusic) {
            this.sound.play();
        } else {
            var testSound = this.soundArray[this.count];
            // play the audio
            //this.soundArray[this.count].play();
            //console.log("Playing audio!");
            testSound.play();
            this.count += 1;            // add one to the counter
            this.count = this.count   % this.arraySize; // using modulus to make sure it doesn't go past the array length
            console.log("Count is: " + this.count);
        }
    }

    public loopAudio() : void {
        if (this.isMusic) {
            this.sound.loop = true;
        }
    }
}