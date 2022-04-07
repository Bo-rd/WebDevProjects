let musicQueue = {
   songs: ["Party Rock Anthem", "I Gotta Feeling", "Macarena"],
   nextSong: 0,

   lget next() {
    return songs[nextSong + 1];
   },
   set next(song) {
      this.nextSong = song;
   }
};

// Run through the queue three times
for (let c = 0; c < musicQueue.songs.length * 3; c++) {
   console.log("Now playing: " + musicQueue.next);
}

// Test the next setter
musicQueue.next = 2;
console.log(musicQueue.next);   // Macarena
musicQueue.next = 3;
console.log(musicQueue.next);   // Party Rock Anthem
musicQueue.next = -1;
console.log(musicQueue.next);   // Party Rock Anthem
