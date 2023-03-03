const userInput = "b";
const ascii = userInput.toLowerCase().charCodeAt(0);

switch(ascii){
    case 97:
        console.log(`${userInput} es vocal`);
        break;
    case 101:
        console.log(`${userInput} es vocal`);
        break;
    case 105:
        console.log(`${userInput} es vocal`);
        break;
    case 111:
        console.log(`${userInput} es vocal`);
        break;
    case 117:
        console.log(`${userInput} es vocal`);
        break;
    default:
        console.log(`${userInput} no es vocal`);
        break;
}