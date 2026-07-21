//switch statement example
// 0 -sunday, 1 - monday, 2 - tuesday, 3 - wednesday, 4 - thursday, 5 - friday, 6 - saturday
let day = 3;                
switch (day) {
    case 0:
        console.log("Sunday");  
        break;          
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");
        break;  
    case 4:
        console.log("Thursday"); 
        break;
    case 5:
        console.log("Friday");   
        break;
    case 6:
        console.log("Saturday"); 
        break;
    default:
        console.log("Invalid day");
}           


//  example of switch statement with multiple cases
let browser = "Chrome";
switch (browser) {
    case "Edge":    
        console.log("You've got the Edge!");
        break;
    case "Chrome":  
    case "Firefox":             
    case "Safari":
    case "Opera":
        console.log("Okay we support these browsers too");  
        break;
    default:
        console.log("We hope that this page looks ok!");  
}                       

//  example of switch statement with multiple cases
let fruit = "Banana";
switch (fruit) {
    case "Banana":  
    case "Mango":
    case "Pineapple":
        console.log("Tropical fruit");  
        break;
    default:
        console.log("Unknown fruit");
}           

    