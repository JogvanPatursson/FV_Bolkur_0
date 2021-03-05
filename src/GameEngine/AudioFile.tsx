
export default class AudioFile {

    // placeholder for the sound variable
    private sound:any;

    // variables

    // constructor
    constructor(filename:string) {
        this.sound = new Audio(filename);
        // copying the value of pVol to vol
        //console.log("Audio File Created!")
    }

    // member functions
    
    // for playing the audio
    public playAudio() : void {
        this.sound.play()
        //console.log("Playing audio!");
    }

    public loopAudio() : void {
        this.sound.loop();
    }
}