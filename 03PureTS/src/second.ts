// interface TakePhoto {
//     cameraMode: string
//     filterMode: string
//     burst: number
// }

// interface Story {
//     createStory(): void
// }

// class Instagram implements TakePhoto{
//     constructor(
//         public cameraMode: string,
//         public filterMode: string,
//         public burst: number
//     ){}   
// }

// class Youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filterMode: string,
//         public burst: number,
//         public short: number
//     ) { }
//     createStory(): void {
//         console.log("Story was created.");
//     }
// }