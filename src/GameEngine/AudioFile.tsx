import { Howl, Howler} from "howler"
export default class AudioFile {

    // placeholder for the sound variable
    private sound:any;

    // variables
    private audioFileName:string;   // path to the audiofile "./audio.mp3"
    private vol: any;               // the volume for the audio file

    // constructor
    constructor(filename:string, pVol: number) {
        this.audioFileName = filename;
        this.sound = new Howl({
            src: this.audioFileName,
            autoplay: false,
            volume: pVol,
        });
        // copying the value of pVol to vol
        this.vol = pVol;

        //console.log("Audio File Created!")
    }

    // getters
    public getFileName() : string {
        return this.audioFileName;
    }

    // setters
    public setVolume(pVol: number) : void {
        if (pVol > 1.0 || pVol < 0.1 ) {
            // console.log("Not a valid input!");
        } else {
            this.vol = pVol;
            this.sound.volume(this.vol);
            // console.log(`Volume has been set to ${this.vol}`)
        }
    }

    // member functions
    
    // for playing the audio
    public playAudio() : void {
        this.sound.play()
        //console.log("Playing audio!");
    }

    // for looping the audio
    public loopAudio() : void{
        this.sound.loop = true;
    }
}