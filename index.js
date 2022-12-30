const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let  textbx1 = document.getElementById("textbx1");
let  textbx2 = document.getElementById("textbx2");
let l = characters.length;
let pass=[];
 
function password(){
    for (let i =0;i<15;i++){
        let a  = Math.floor(Math.random()*l);
        let b = characters[a];
        pass[i]=b;  
    }
    let string = " " ;
    for(let x =0;x<15;x++){
        string+=pass[x];
    }
    textbx1.value= string;
    console.log(string);
}
function password1(){
    for (let i =0;i<15;i++){
        let a  = Math.floor(Math.random()*l);
        let b = characters[a];
        pass[i]=b;  
    }
    let stringt = " " ;
    for(let x =0;x<15;x++){
        stringt+=pass[x];
    }
    textbx2.value= stringt;
}


