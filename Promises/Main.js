(function(){

    console.log(">>>Promises test");

    let a = 10;

    let prm = new Promise((resolve, reject)=>{

        if (a === 10) resolve(a);    

        reject(-1);
    });
    
    prm
        .then(val => {
            console.log("prm.resolve result is: ", val);         
            return 11;
        })
        .then(val => console.log("prm.resolve2 result is: ", val))
        .catch(err => console.log("prm.catch error is: ", err));

    FuncA(15)
        .then(val => console.log("FuncA.resolve result is: ", val));


    

    async function FuncA(val){

        try{
            await FuncB(val);
        }
        catch(e){
            console.log("catch result is: ", e);    
        }

        return val;
    }  
    
    async function FuncB(val){

        //throw new Error("errorrrr FuncB");

        return val * 10;
    } 

    Promise.all([FuncA(20), FuncB(40)])
        .then(val => console.log("Promise.all result is: ", val))
        .catch(err => console.log("Promise.all.catch error is: ", err));

    Promise.race([FuncA(10), FuncB(100)])
        .then(val => console.log("Promise.race result is: ", val))
        .catch(err => console.log("Promise.race.catch error is: ", err));

}())