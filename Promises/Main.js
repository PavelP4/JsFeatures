(function(){

    console.log("Promises test");

    let a = 1;

    let prm = new Promise((resolve, reject)=>{

        if (a === 10) resolve(a);    

        reject(-1);
    });

    prm
        .then(val => console.log("prm.resolve result is: ", val))
        .catch(err => console.log("prm.catch error is: ", err));
}())