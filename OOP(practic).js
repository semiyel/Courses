"use strict";
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?", "");
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один з останніх переглянутих фільмів?", ""),
        b = prompt("Яку б оцінку йому поставили?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Переглянуто доволі мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Ви переглянуло достатньо фільмів");
    } else if (personalMovieDB.count >= 30) {
      console.log("Ви кіноман");
    } else {
      console.log("помилка");
    }
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      //   let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

      //   if (genre === "" || genre == null) {
      //     console.log("Ви ввели некоректні дані, або ж не ввели їх взагалі");
      //     i--;
      //   } else {
      //     personalMovieDB.genres[i - 1] = genre;
      //   }
      let genres = prompt(
        `Введіть ваші улюблені жанри через кому`
      ).toLowerCase();
      if (genres === "" || genres == null) {
        console.log("Ви ввели некоректні дані, або ж не ввели їх взагалі");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Ваш улюблений жанр під номером ${i + 1} - це ${item}`);
    });
  },
};
