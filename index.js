// let movies=['harry potter','12 angryMan','a dog life','dark coffe'];
// let years=[1999,1989,1940,2010];
// let numbers=[1,2,3,10,9,8,10];

// // let concarArray=movies.concat(years);
// // console.log(concarArray);
// // console.log(numbers.includes(9,2));
// // console.log(numbers.indexOf(9,6));
// // let newMovies=movies.slice(0,2);
// // console.log(newMovies);
// // console.log(movies);
// // console.log(numbers);
// // let newNumbers=numbers.reverse()
// // console.log(numbers);
// // console.log(newNumbers);
// // console.log(numbers.splice(1))
// // console.log(numbers.splice(1,2))
// // console.log(numbers.splice(2,3))
// console.log(numbers)
// console.log(numbers.splice(1,0,4,32)) ;
// // console.log(`new numbers= ${newNem}`)
// console.log(numbers)

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
// console.log(numbers.sort())

// function makeHeart(name,lastName){
//     console.log(name+lastName)
// }

// makeHeart('hossein','cholaki')

// for (let i=0; i<=20;i+=2){
//     console.log(i)
// }

// for(let i=20; i>=0; i-=2){
//     console.log(i)
// }

// let numbers=[1,23,4,5,6,7,1]
// for (let i=0; i<numbers.length; i++){
//     console.log(`number ${i+1} = ${numbers[i]}`)
// }

// const airplane=[
//     ['nilofar','kosar','fatmeh'],
//     ['ali','mohsen','shirin'],
//     ['atena','mehdi','benyamin']
// ]
// for(let i=0; i<airplane.length; i++){
//     console.log(`Row ${i + 1} contains:`)
//     for(let j=0; j<airplane[i].length; j++){
//         console.log(airplane[i][j])
//     }
// }

// let count =0;
// while (count<=10){
//     console.log(count);
//     count++;
// }

// console.log('   hossein  '.trim())
// console.log('   hossein  '.trim().length)

// const names = ["amirali", "ali", "mohammad"];

// const result = names.map((name) => {
//     return name;
// });

// const result = names.map((name) => {
//     return name.toUpperCase();
// });

// console.log(result);

// setInterval(function(){
//     console.log('hello do your best')
// },5000)

// let count = 1000;
// const time = setInterval(() => {
//     console.clear();
//     // console.log(count)
//     count--;
//     console.log(count);
//     if (count === 980) {
//         clearInterval(time);
//     }
// }, 1000);

// setInterval(() => {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let second = date.getSeconds();
//     console.clear();
//     console.log(`${hours} : ${minutes} : ${second}`);
// }, 1000);

// let count=0;
// const time = setInterval(() => {
//     count++;
//     console.log(count);
//     if (count === 5) {
//         clearInterval(time);
//     }
// }, 2000);

// const numbers = [1, 2, 3, -5, -10, -6, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// let moreThenTen=numbers.filter(number=>number>10)
// console.log(moreThenTen)
// console.log(numbers)

// let numberFour = numbers.filter(function (num) {
//     return num === 4;
// });
// console.log(numberFour);

// let isFourIncludes = numbers.includes(4);
// console.log(isFourIncludes);

// const result = numbers.find((num) => num > 17);
// console.log(result);


// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// const moreThanSix = words.filter((word) => word.length > 6);
// const moreThanSixx = words.filter((word) => word.length > 6);
// console.log(moreThanSix);
// console.log(moreThanSixx);

// let evens = [2, 4, 6, 8];
// const mixes = [1, 4, 6, 8];
// const consequence = [1, 2, 3];

// // complete the reusable function:
// const isAllAreEvens = (arrayOfNumber) => {
//     return arrayOfNumber.every((num) => num % 2 === 0);
// };

// console.log(isAllAreEvens(evens));
// console.log(isAllAreEvens(mixes));
// console.log(isAllAreEvens(consequence));

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// const total = prices.reduce((min, price) => {
//     console.log(`min: ${min}`);
//     console.log(`price: ${price}`);
//     return min + price; // 31.47 + 49.99 = 81.47
// }, 0);

// const total = prices.reduce((min, price) => {
//     console.log(`min: ${min}`);
//     console.log(`price: ${price}`);
//     return min + price; // 11.49 + 19.99 = 31.47 + 81.47
// });

// const total = prices.reduce((min, price) => {
//     console.log(`min: ${min}`);
//     console.log(`price: ${price}`);
//     return min + price;
// }, 100);

// const total = prices.reduce((min, price) => {
//     console.log(`min: ${min}`);
//     console.log(`price: ${price}`);

//     // if (min < price) {

//     // }
// });

// const pricess=[9.99,1.5,19.99,49.99,30.5]
// let total=0;
// for(let price of pricess){
//     total+= price
// }
// console.log(total)

// const total=pricess.reduce((min,price)=>{
//     console.log(`min : ${min}`);
//     console.log(`price : ${price}`);

//     return min + price;
// },0)

// const mystery='answer';
// const fName='hossein'
// const obj={
//     [mystery] : 40,
//     fName,
//     sum1:()=>{
//         console.log(20+20)
//     },
//     sum:function(){
//         console.log(20+30)
//     }
// }

// console.log(obj.sum1)
// console.log(obj.sum)
// console.log(obj.fName)

// let laptop = {
//     brand: "Lenovo",
//     screenSize: 13,
//     isTouchscreen: true,
//     colors: ["spaceGray", "black", "white"],
//     spec:{
//       owner: 'Angela' , 
//       age: 24,
//       height: undefined
//     }
//   }
  
//   // [] NOTATION
//   // nameObj["namePropert"]
  
//   console.log(laptop["screenSize"]);
//   console.log(laptop.spec["owner"]);
//   console.log(laptop["spec"]["height"]);
//   console.log(laptop["spec"]["age"]);
//   console.log(laptop["colors"][2])
//   console.log(laptop.colors[0])
//   console.log(laptop.spec.age)


// let mestery = "lolo"; 
// let answer= 'jojo'
// mestery = "mehdi"
// const inverseOfPI
//  = 1/Math.PI;
//  let grade =20;
// const obj ={
//     p1:'you',
//     p2:25,
//     funcName(){},
//     arrowfUncName : ()=>{console.log(20+20)},
//     [answer]:25,
//     [mestery]:22,
// inverseOfPI, // inverseOfPI : inverseOfPI
// grade, //grade : grade
// }

// const user ={
//     [id]:2,
//     name:"nahid",

// }

// console.log(obj);
// console.log(obj.arrowfUncName())
// console.log(obj.arrowfUncName)
//  console.log(obj[mestery])
//  console.log(obj.mestery)
//  console.log(obj[answer])
//  console.log(obj.answer)
//  console.log(obj['answer'])
//  console.log(obj.jojo)
//  console.log(obj['jojo'])
//  console.log(obj[jojo])
//  console.log(obj.p1)
//  console.log(obj[p1])
//  console.log(obj['p1'])
//  console.log(obj[answer])
//  console.log(obj.mehdi);
//  console.log(obj["mest"])

// const testerObj = {
//     nameObj: "testerObj",
//     function1() {
//         // console.log("this is my parent: ",this)
//         let fakeName = this.name2 + "fake";
//         console.log(fakeName)
//     },

//     arraowFunc: () => {
//         console.log(this);
//         console.log(this.name2);
//     },

//     childObj: {
//         nameObj: "childeObj",
//         func2() {
//             console.log(this.nameObj);
//         },
//         jasemFunc() {
//             console.log(this);
//            const arraowFuncChild = () => {
//                 console.log(this);
//             }
//             arraowFuncChild();

//         },

//        childChildObj :{
//         nameObj : "childChildObj",
//         funcChild () {
//             console.log(this);
//              const arraowFunc3 = () =>{
//                 console.log(this.nameObj)
//              }
//              arraowFunc3() 
//         },
//          arraowFunc3:() =>{
//             console.log(this)
//          }
//        } 
//     }
// }

// testerObj.childObj.childChildObj.funcChild();

// const scoreOfRallyRace = [7400,4500,3500,1700,1200,654,456];

// const winner = scoreOfRallyRace[0];
// const second = scoreOfRallyRace[1];
// const third = scoreOfRallyRace[2];
// const [winner,second ,third] = scoreOfRallyRace;

// console.log(winner);
// console.log(second);
// console.log(third);

// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2

//  const { PI :bb,e:g = 14.5,SQRT2: sqr ,SQR=2.26} = Math;
//  const { PI , floor, random} = Math;
// console.log(floor(random()*100))
// console.log(PI)
// console.log(bb);
// console.log(g);
// console.log(sqr);
// console.log(SQR);
// console.log(Z);

// const scoreOfRallyRace = [7400,4500,3500,1700,1200,654,456];

// const [winner,second ,third,...othersScore] = scoreOfRallyRace;

// console.log(winner);
// console.log(second);
// console.log(third);
// // othersScore.push(1800);
// scoreOfRallyRace.push(1800);

// console.log(othersScore);
// console.log(scoreOfRallyRace);

// -----------------------------------------------------
// const car ={
//     cylander:6,
//     passenger:4,
//     door:2,
//     color:"black",
//     isFoureWheelDrive  : true,
//   }
//   const objCar ={
//     door:2,
//     color:"black",
//     isFoureWheelDrive  : true, 
//   }
  
//    const {cylander, passenger, ...newCar} = car;
//    console.log(cylander);
//    console.log(passenger);
//    console.log(newCar);
//    newCar.cylander=14;
//    newCar.fast="400km/s";
//    console.log(newCar);
//    console.log(car);

// const arr=[1,2,3,4,5]
// const [a,b,c,,e,h]=arr;
// console.log(e)
// console.log(" ")
// console.log(h)

// let answer='jojo';
// const obj={
//     [answer]:'jiji',
//     PI:'PI'
// }
// console.log(obj.jojo)
// console.log(obj.PI)

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

