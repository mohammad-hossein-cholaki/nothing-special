// const data ={
//   temp1:"001",
//   temp2:"002",
//   firstName:"joodi",
//   lastName:"aboat",
// }

// const {temp1,temp2,...restOfData} = data;
// console.log(temp1);
// console.log(temp2);
// console.log(restOfData);

// const newArr = [{...restOfData}];
// const newObj ={...restOfData}
// console.log(newArr);
// console.log(newObj);


// function showlaptop ({ram,hard,cpu}){
//   console.log(`Your Laptop Has ram of ${ram} 
//   and hard of ${hard} and cpu With ${cpu}`)
// }
// function showlaptop ({ram,hard,cpu}){
//   console.log(`Your Laptop Has ram of ${ram} 
//   and hard of ${hard} and cpu With ${cpu}`)
// }

// const laptop1 = {
//   ram:32,
//   hard:250,
//   cpu:"corei7"

// }
// const laptop2 = {
//   ram:50,
//   hard:250,
//   cpu:"corei5"

// }
// // const {ram,hard,cpu} =laptop1;
//  showlaptop(laptop2);


// Math.max 
// const numbers = [12,4,145,478,495,145,0,100]
// console.log(numbers)

// console.log(...numbers)
// console.log(Math.max(...numbers));

// const data ={
//     temp1:'001',
//     temp2:'002',
//     fName:'hossein',
//     lName:'cholaki'
// }
// const{temp1, ...restOfData}=data
// console.log(temp1)
// console.log({...restOfData})
// console.log(...restOfData)

const circleX ={
    name:"circleX",
    radius:5,
   }
   const circleY ={
    name:"circleY",
    
   }
  // PI * r *r
   const circleArea = ({radius=6})=>{
  const area =(Math.PI * radius * radius).toFixed(2);
  const area1 =(Math.PI * radius * radius);
  console.log(Math.PI);
  console.log(radius)
  console.log(area) ;
  console.log(area1) ;
  console.log('--------------------------------------') ;
   }
   circleArea(circleX);
   circleArea(circleY)