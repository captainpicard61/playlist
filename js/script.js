/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Hello Mama Africa","Wine Slow","Beautiful Lady","Say It","Tempted To Touch","They Gonna Talk"];
var artist=["Garnett Silk","Gyptian","Gyptian","Tory Lanez","Beres Hammond","Beres Hammond"];
var songlengths = ["3:34","2:34","3:44","3:57","3:48","3:57"];
var links =["https://www.youtube.com/watch?v=5_3AYURa3BU","https://www.youtube.com/watch?v=JFgxQi7w5YU","https://www.youtube.com/watch?v=M-lmi9ASWgI","https://www.youtube.com/watch?v=_zfALgPeOAE","https://www.youtube.com/watch?v=BKwDeddE1io","https://www.youtube.com/watch?v=i1d6Om0dimM"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    songs.forEach(function(songs) {
        $("#songs").append("<p>"+ songs + "<p>");
    });
     artist.forEach(function(artist) {
        $("#songs").append("<p>"+ artist + "<p>");
    });
     songlengths.forEach(function(songlengths) {
        $("#songs").append("<p>"+ songlengths + "<p>");
    });
     links.forEach(function(links) {
        $("#songs").append("<p><a href=\"" + links + "\">Listen <p>");
    });
    // <a href= https:www.youtube.com/watch?v=_zfALgPeOAE","https:www.youtube.com/watch?v=BKwDeddE1io","https:www.youtube.com/watch?v=i1d6Om0dimM"> Listen </a>
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    var SVJ =  $("#song").val();
    songs.push(SVJ);
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
