
document.getElementById("fate").onclick = function(){


let typedText = document.getElementById("input").value;
let prologue = document.getElementById("returnQuestion");
prologue.textContent = typedText;




//This is the plan for the actual response below
let response = Math.floor(Math.random() * 20)+ 1;
let fate = document.getElementById("fate");

switch(response){
        case 1: 
            fate.textContent = "It is certain";
            break;
        case 2:     
            fate.textContent = "It is so";
            break;
        case 3: 
            fate.textContent = "Without a doubt";
            break;
        case 4:     
            fate.textContent = "Yes definitely";
            break;

        case 5: 
            fate.textContent = "Most Likely";
            break;
        case 6:     
            fate.textContent = "Outlook Good";
            break;
        case 7: 
            fate.textContent = "In your dreams";
            break;
        case 8:     
            fate.textContent = "Signs say yes";
            break;
        case 9: 
            fate.textContent = "Hazy Outlook";
            break;
        case 10:     
            fate.textContent = "Ask again later";
            break;
        case 11: 
            fate.textContent = "Cannot Predict";
            break;
        case 12:     
            fate.textContent = "Don't Count on it";
            break;

        case 13: 
            fate.textContent = "My reply is no";
            break;
        case 14:     
            fate.textContent = "Outlook, no good";
            break;
        case 15: 
            fate.textContent = "Survey says: no";
            break;
        case 16:     
            fate.textContent = "lol no";
            break;
            
}


}

