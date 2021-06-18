//document.getElementById('btn-click').addEventListener('click',function(){
  //  alert('! I am clicked: linked');
//});
let country = 'india';
let continent = 'Asia';
let population = 1300000;

console.log(country);
console.log(continent);
console.log(population);
//let isIsland= false;
let language;
 
//console.log(typeof isIsland);
//console.log(typeof population);
//console.log(typeof country);
//console.log(typeof language);

language= 'english';
console.log(language);
//console.log(population/2);
//population++;
//console.log(population);
//console.log(population>6);
//console.log(population<330000);
//const description= country + ' is in ' +continent+' and its '+population+' million speaks '+language;
//console.log(description);

//const massMark= 78;
//const heightMark= 1.69;
//const massJohn= 92;
//const heightJohn= 1.95;

//const massMark= 95;
//const heightMark= 1.88;
//const massJohn= 85;
//const heightJohn= 1.76;

//const BMIMark= massMark / heightMark ** 2;
//const BMIJohn= massJohn / heightJohn ** 2;
//const markHigherBMI= BMIMark > BMIJohn;
//console.log(BMIMark , BMIJohn, markHigherBMI);

//const description = `${country} is in  ${continent} and its ${population} million people speak ${language}`;
//console.log(description);

//if (population > 3300000){
  //console.log(`${country}'s  population is above average`);
//}
//else{
  //console.log(`${country}'s population is ${3300000- population} million below average`);

//}

//if (BMIMark > BMIJohn){
//  console.log(`Marks BMI (${BMIMark}) is higher than Johns (${BMIJohn})`)
//}
//else{
 // console.log(`Johns BMI (${BMIJohn}) is higher than Marks (${BMIMark})`)
//}

//console.log('9' - '5');
//console.log('19' - '13' + '17');
//console.log('19' - '13' + 17);
//console.log('123' < 57);
//console.log(5 + 6 + '4' + 9 - 4-2);
//const numNeighbours = prompt('how many neighbour countries does your country have ?');

//const numNeighbours = Number(prompt('how many neighbour countries does your country have ?'));

 //if(numNeighbours === 1){
   //console.log('only 1 border!');
 //}
//else if(numNeighbours > 1){
  //console.log('more than 1 border');
//}
//else{
  //console.log('No borders');
//}

if (language === 'english' && population < 5000000 && !'isIsland')
{
  console.log(`you should live in ${country} :)`);
}
  else {
  console.log(`${country} does not meet your criteria :`);
     }

     //const scoreDolphins = (96 + 108 + 89 / 3);
     //const scoreKoalas = (88 + 91 + 110 / 3);
     //console.log(scoreDolphins , scoreKoalas);
     //if(scoreDolphins > scoreKoalas){
       //console.log('Dolphins win the trofy');
     //}
     //else if(scoreDolphins < scoreKoalas){
       //console.log('Koalas win the trofy');
     //}
     //else if(scoreDolphins === scoreKoalas){
      // console.log('game id draw because both the teams having  the same score ');
     //}

     const scoreDolphins = (97 + 112 + 80 / 3);
     const scoreKoalas = (109 + 95 + 50 / 3);
     console.log(scoreDolphins , scoreKoalas);

     if(scoreDolphins > scoreKoalas && scoreDolphins >=100){
       console.log('Dolphins win the trophy');
     }
     else if(scoreKoalas > scoreDolphins && scoreKoalas >=100){
      console.log('Koalas win the trophy');
    }
    else if(scoreDolphins === scoreKoalas && scoreDolphins >=100 && scoreKoalas >=100){
      console.log('Both win the trophy');
    }
    else{
      console.log('No one win the trophy');
    }
     console.log(`${country}'s population is ${population > 3300000 ? 'above' : 'below'} average`);

const bill= 430;
const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


function describeCountry(countrt,population,cpaitalCity){
  return `${country} has ${population}`
}


















