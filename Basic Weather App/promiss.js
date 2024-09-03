// const parchi=new Promise(function(resolve,reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw=> raw.json())
//     .then(result=> {
//         if(result.results[0].gender==="male") resolve();
//         else reject();
//     });
// });

// parchi
// .then(function(){
//     console.log("Male");
// })
// .catch(function(){
//     console.log("Female");
// })

const parchi = new Promise(function (resolve, reject) {
  fetch(`https://randomuser.me/api/`)
  .then((raw) => raw.json())
  .then(result=> {
    if((result.results[0].gender)==="male") resolve();
    else reject();
  });

});
parchi
.then(()=>console.log("Male")
)
.catch(()=>console.log("Female"))