
// console.log("hola laurita");
//DESESTRUCTURACION DE OBJETOS
// interface AudioPlayer{
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }
// interface Details{
//     author: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer={
//     audioVolume: 80,
//     songDuration: 39,
//     song: "All night long",
//     details: {
//         author: "Maluma",
//         year: 2020
//     } 
// }

// const {audioVolume, songDuration, song:anotherSong, details} = audioPlayer;
// const {author, year} = details;
// console.log(`Cancion: ${anotherSong}, Duracion: ${songDuration}, Cantante: ${author}` );

//DESESTRUCTURACION DE ARRAYS
const [goku, vegeta, trunks='Not Found']:string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log("Personaje 1: ", goku);
console.log("Personaje 2: ", vegeta);
console.log("Personaje 3: ", trunks);
export{}