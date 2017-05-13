// var mypromise =new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        resolve();
//    },250)
// })

// mypromise.then((data)=>{

// })



// function A(cb,v){
//     setTimeout(()=>{
//         cb(v+v);
//     },200)
// }

// function B(cb,v){
//     setTimeout(()=>{
//         cb(v+1);
//     },200)
// }
// function C(cb,v){
//     setTimeout(()=>{
//         cb(v+2);
//     },200)
// }
// function D(cb,v){
//     setTimeout(()=>{
//         cb(v+3);
//     },200)
// }
// A((data)=>{
//     B((data)=>{
//         C((data)=>{
//             D((data)=>{
//                 console.log(data);
//             },data)
//         },data)
//     },data)
// },5);


// console.log("ok",A(()=>{},5));




function A(v) {
    return new Promise((resolve, reject) => {
        resolve(v + v);
    })
}
function B(v) {
    return new Promise((resolve, reject) => {
        if (v <= 10)
            resolve(v + 1);
        else
            reject("v is more then 10");
    })
}
function C(v) {
    return new Promise((resolve, reject) => {
        resolve(v + 2);
    })
}
function D(v) {
    return new Promise((resolve, reject) => {
        resolve(v + 3);
    })
}


A(5).then((v) => {
    return v;
}).then((v) => {
    return B(v);
}).then((v) => {
    return C(v);
}).then((v) => {
    return D(v);
}).then((v) => {
    console.log(v);
}).catch((err) => {
    console.log(err);
});
