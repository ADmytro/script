'use strict';
// // let number=5;
// // const leftBorderWidth=5;

// // number=55;
// // console.log(number);

// // const obj={
// //     a:50
// // };   
// // console.log(obj);

// // alert('Hello');
// // const result=confirm ("Are you ready?");
// // console.log(result);

// // const answer=prompt("dff jglfj fjgk?", "");

// // console.log(typeof (answer));

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

// const personalMovieDB={
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// console.log(personalMovieDB);

// // Практика часть2

// // for (let i=0; i<2; i++){
// //     const a= prompt("Один из последних просмотренных фильмов?", ""),
// //           b= prompt("Насколько оценете его?","");
    
// //     if (a != null && b!= null && a!=''&& b!='' && a.length < 50 && b.length < 50){
// //         personalMovieDB.movies[a] = b;
// //         console.log('done');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
// //     personalMovieDB.movies[a] = b;
     
// // }

// let j=0;

// while (j<2) {
//     j++;
//     const a= prompt("Один из последних просмотренных фильмов?", ""),
//     b= prompt("Насколько оценете его?","");
//     if (a != null && b!= null && a!=''&& b!='' && a.length < 50 && b.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 j--;
//             }
//     personalMovieDB.movies[a] = b;

// }




// // if(personalMovieDB.count <10) {
// //     console.log('просмотрено мало фильмов');
// // } else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
// //     console.log('классический зритель');
// // }else if (personalMovieDB.count >=30){
// //     console.log("Вы - киноман");
// // }







// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// // const hamburger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;
 
// // if (hamburger === 3 && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // }


// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;
 
// // if (hamburger || cola || fries === 3 || nuggets) {
// //    console.log('Done!')
// // }

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;
 
// // if (hamburger && cola || fries === 3 && nuggets) {
// //    console.log('Done!');
// // }else {console.log('<jkn');}


// // let num=50;
// // for (let i=1; i <= 8; i++) {
// //    console.log(num);
// //    num++;
// // }

// // for (let i=0; i<3; i++){
// //    console.log(i);
// //    for (let j=0; j<4; j++){
// //       console.log(j);
// //    }
// // }

// // let result="";
// // const length=7;

// // for (let i=0; i<length; i++){
// //    for (let j=0; j<i; j++){
// //       result+="*";
// //    }
// //    result+="\n";
// // }
// // console.log(result);

// // first: for (let i=0; i<3; i++){
// //    console.log (`First level: ${i}`);
// //    for (let j=0; j<3; j++){
// //       console.log(`Second level: ${j}`);
// //       for(let k=0; k<3; k++){
// //          if (k===2) {break;}
// //          console.log(`Third level: ${k}`);
// //       }
// //    }
// // }

// // let num=5;
// // while (num<=10){
// //    console.log(num);
// //    num++;
// // }

// // for (let i=20; i>=10; i--){
// //    if (i===13){
// //       break;
// //    }
// //    console.log (i);
// // }

// // for (let i=2; i<=10; i = i+2){

// //    console.log(i);
// // }

// // for (let i = 2; i <= 16; i++) {
// //    if (i % 2 === 0) {
// //        continue;
// //    } else {
// //        console.log(i);
// //    }
// // }

// // let i=1;
// // while (i<15){
// //    i = i+2;
// //    console.log(i);
// // }

// // let i = 2;

// // while (i <= 16) {
// //     if (i % 2 === 0) {
// //         i++;
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// //     i++;
// // }

// // const arrayOfNumbers = [];

// // for (let i = 5; i < 11; i++) {
// //     arrayOfNumbers[i - 5] = i;
// // }

// // console.log(arrayOfNumbers);




// // // const arr=[1,2,3,4,5];
// // // for (let i=0; i < arr.length; i++) {
// // //    for (let j=5;)
// // // }
// // const arr = [3, 5, 8, 16, 20, 23, 50];
// // const result = [];
// // for (let i = 0; i < arr.length; i++) {
// //     result[i] = arr[i];
// // }

// // console.log(result);

// // const data = [5, 10, 'Shopping', 20, 'Homework'];

// // for( let i=0; i<data.length; i++){
// //     if (typeof(data[i])==="number" ){
// //         data[i]=data[i]*2;
// //     } else if (typeof(data[i])==="string"){
// //         data[i]=data[i]+'-done';
// //     }
// // }
// // console.log(data);
// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // const result = [];
// // for( let i=4; i>=0; i--){
// //     result[4-i]=data[i];
// // }
// // console.log(result);

// // let result='';
// // const lenth=7;

// // for (let i=1; i<lenth; i++) {
// //     for(let j=0; j<i; j++){
// //         result+="*";
// //     }
// //     result+='\n';
// // }
// // console.log(result);

// let result='';
// let row=6;

// //     for(let j=0; j<12; j++){
// //         if (j%2===0){
// //             for (let i=0; i<5; i++){
// //                 result+=4-i;
// //             }
// //             continue;}
// //         else {for(let k=0; k<j; k++){
// //             result+="*";}
// //         }                            
// //        result+='\n';
    
// // }
//     for (let i=1; i<row; i++) {
//         result+=" ";
//         for(let j=0; j<i*2; j++){
//             if (j%2===0){
//                 continue;}
//             else {for(let k=0; k<j; k++){
//                 result+="*";}
//         }
//         result+='\n';}
//     }
  



// console.log(result);

// // const lines = 5;
// // let result = '';

// // for (let i = 0; i <= lines; i++) {
// //     for (let j = 0; j < lines - i; j++) {
// //         result += " ";
// //     }
// //     for (let j = 0; j < 2 * i + 1; j++) {
// //         result += "*";
// //     }
// //     result += "\n";
// // }

// // console.log(result)


function sayHello(name){
    return `Привет, ${name}!`;
}
sayHello ("Anton");

function sayHello(name) {
   console.log( `Привет, ${name}!`);
    
}

sayHello('Alex');




function returnNeighboringNumbers(num) {
   return console.log([num-1, num, num+1]);
}
returnNeighboringNumbers (7);

let result='';
function getMathResult(a, m){
    if(m<=0 || typeof(m) !=='number'){
        return a;
     }else {
        for( let i=1; i<=m; i++ ){ 
            if ( i===m ){
            result +=a+(i-1)*a; }
            else{
                result +=a+(i-1)*a+'---';
            }  
            }
    }
    return result;  
} 
getMathResult (5, 4);






 
   



