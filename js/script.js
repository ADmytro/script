// 'use strict';
// let number=5;
// const leftBorderWidth=5;

// number=55;
// console.log(number);

// const obj={
//     a:50
// };   
// console.log(obj);

// alert('Hello');
// const result=confirm ("Are you ready?");
// console.log(result);

// const answer=prompt("dff jglfj fjgk?", "");

// console.log(typeof (answer));

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a= prompt("Один из последних просмотренных фильмов?", ""),
      b= prompt("Насколько оценете его?",""),
      c= prompt("Один из последних просмотренных фильмов?", ""),
      d= prompt("Насколько оценете его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);





