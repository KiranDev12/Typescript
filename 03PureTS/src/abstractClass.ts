abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }
    abstract getSepia(): void
    get realTime(): number {
        //complex calculation
        return 0
    }
}

// This below cant be done
// const hc = new TakePhoto("test", "test")

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
        
    }
}

const hc = new Instagram("test", "test", 9)