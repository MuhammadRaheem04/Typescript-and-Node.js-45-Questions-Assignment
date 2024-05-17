// Question 40
// Album:
function make_album(artist_name, albumTitle) {
    return { artist_name: artist_name, albumTitle: albumTitle };
}
var album1 = make_album("Rahat Fateh Ali", "O re piya");
var album2 = make_album("ShreyaGhoshal", "Zihall e Miskin");
var album3 = make_album("KK", "Zara Sa");
console.log(album1);
console.log(album2);
console.log(album3);
// Track Numbers 
// function make_album1( artist_name: string , albumTitle: string , numberofTracks?: number) {
// return {artist_name , albumTitle , numberofTracks} 
function make_album1(artist_name, albumTitle, numberofTracks) {
    return { artist_name: artist_name, albumTitle: albumTitle, numberofTracks: numberofTracks };
}
var album4 = make_album1("Rahat Fateh Ali", "O re piya", 30);
var album5 = make_album1("ShreyaGhoshal", "Zihall e Miskin", 32);
var album6 = make_album1("KK", "Zara Sa", 34);
console.log(album4);
console.log(album5);
console.log(album6);
