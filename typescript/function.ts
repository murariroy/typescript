function  addTwo(num : number):number{
    
    return num +2
    // return false
}


function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,
    isPaid:boolean){}

let loginUser = (name:string,email:string,
    isPaid:boolean = false) =>{}    


signUpUser("murari","kum@gmail.com",false)
  let myval =addTwo(5)
getUpper("murari")



// function getvalue (myval:number):boolean{
//     if(myval>6){
//         return true
//     }
//     return " 3400 ok"
// }

const getHello= (s:string):string => {
    return ""
}
const heros =["thor" , "spiderman","ironman"]
heros.map(hero =>{
    return `hero is ${hero}`
})


const hero =[1,2,3]
heros.map((hero):string =>{
    return `hero is ${hero}`
})


function consoleError(errmsg:string):void{
    console.log(errmsg);
   
    
}

function handleError(errmsg:string):never{
    throw  new Error (errmsg);
   
    
}



export {}