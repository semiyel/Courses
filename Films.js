"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один з останніх переглянутих фільмів?", ""),
  b = prompt("Яку б оцінку йому поставили?", ""),
  c = prompt("Один з останніх переглянутих фільмів?", ""),
  d = prompt("Яку б оцінку йому поставили?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
