/* Task 1.1. Add your movie data here
   and export it so it's available in server.js */

const movies = {
  tt0317219: {
    imdbID: "tt0317219",
    Title: "Cars",
    Released: "2006-06-09",
    Runtime: 116,
    Genres: ["Animation", "Adventure", "Comedy"],
    Directors: ["John Lasseter", "Joe Ranft"],
    Writers: ["Dan Fogelman", "John Lasseter", "Joe Ranft"],
    Actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    Plot: "On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
    Metascore: 73,
    imdbRating: 7.3,
  },
  tt0448115: {
    imdbID: "tt0448115",
    Title: "Shazam!",
    Released: "2019-04-05",
    Runtime: 132,
    Genres: ["Action", "Adventure", "Comedy"],
    Directors: ["David F. Sandberg"],
    Writers: ["Henry Gayden", "Darren Lemke", "Bill Parker"],
    Actors: ["Zachary Levi", "Mark Strong", "Asher Angel"],
    Plot: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
    Poster: "https://m.media-amazon.com/images/M/MV5BZWM1YjdmOGQtNGYyMC00NjMwLTk1OWUtMGYzM2NjYjliYzYyXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 71,
    imdbRating: 7.0,
  },
  tt2975590: {
    imdbID: "tt2975590",
    Title: "Batman v Superman: Dawn of Justice",
    Released: "2016-03-25",
    Runtime: 151,
    Genres: ["Action", "Adventure", "Sci-Fi"],
    Directors: ["Zack Snyder"],
    Writers: ["Bob Kane", "Bill Finger", "Jerry Siegel"],
    Actors: ["Ben Affleck", "Henry Cavill", "Amy Adams"],
    Plot: "Batman is manipulated by Lex Luthor to fear Superman. Superman's existence is meanwhile dividing the world and he is framed for murder during an international crisis.",
    Poster: "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 44,
    imdbRating: 6.4,
  },
};

module.exports = movies;
