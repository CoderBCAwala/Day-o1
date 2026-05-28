



const result = new Promise(function(resolve, reject){
    let a = false;
    if (a == true){
        resolve ("kam ho gaya bhai")
    }else{
        reject ("error aagaya bhai")
    }
})
result
  .then (function(msg){
    console.log(msg)
  })
    .catch (function(err){
        console.log(err)
    })