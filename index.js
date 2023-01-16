// call stack

function one(){
    console.log('one')
}
function two(){
    console.log('two')
}
function three(){
    console.log('three')
}
one();
two();
three();
// ------------------------------------------------------------------
function one(){
    console.log('one')
    one();
}
function two(){
    console.log('two')
    two();
}
function three(){
    console.log('three')
}
three();

// -----------------------------------------------------------------------------

// web api


function one(){
    console.log('one')
}
function two(){
    setTimeout(()=>{
        conseole.log('from set time out')
    },1000)
}
function three(){
    console.log('three')
}

one();
two();
three();
// -----------------------------------------------------------

// callback

function one(){
    console.log('one')
}

function two(callback){
    setTimeout(()=>{
        conseole.log('from set time out')
        // three();  wrong way  راه پایین راه درست است
        callback()

    },1000)
}
function three(){
    console.log('three')
}

one();
two(three);
// -----------------------------------------------------------

// promise

function one(){
    console.log('one')
}

function two(){
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        conseole.log('from set time out')
        resolve()

    },1000)
})
}
function three(){
    console.log('three')
}

one();
two().then(()=>{three()});
// -----------------------------------------------------------

// more example:

// const  getBook= (url, delay)=>{
//     setTimeout(()=>{
//         console.log(`data recive from ${url} `)
//     },delay)
// }

// getBook('book.com/book1',1000)
// getBook('book.com/book2',2000)
// getBook('book.com/book3',3000)

// --------------------------------------------------------

const  getBook= (url, delay,callback)=>{
    setTimeout(()=>{
        console.log(`data recive from ${url} `)
        if(callback){
            callback();
        }
    },delay)
}

getBook('book.com/book1',1000,()=>{
    getBook('book.com/book2',1000,()=>{
        getBook('book.com/book3',1000)
    })
})

// --------------------------------------------------------

const myPromise = (name, isOk)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isOk){
            console.log(`${name} logged`);
            resolve()
            }else{
                reject({err: 'error'});
            }
        },1000)
    })
}
// myPromise('reza').then(()=>{
//     myPromise('ali').then(()=>{
//         myPromise('hasan')
//     })
// })

myPromise('reza',true)
.then(()=>{
    return myPromise('ali' ,false);
})
.then(()=>{
    return myPromise('hasan')
})
.then(()=>{
    console.log('hi')
})
.catch((err)=>{
    console.log(err)
})
// best way
// -----------------------------------------------
// json= PARSE & stringify
const obj={
    name:'reza',
    age:12
}
const objToJson = JSON.stringify(obj)
console.log(objToJson)
const jsonToObjec=JSON.parse(objToJson)
console.log(jsonToObjec);

// ---------------------------------------------------------
const fetchData = async ()=>{
    const response = fr
}