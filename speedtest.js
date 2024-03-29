//wright your code here
function checkSpeed(speed){
    if (speed < 70){
        return "Ok";
    }
    let diff = speed - 70
    let point = Math.floor(diff/5);
    if (point > 12){
        return "Licence suspended";
    }
    return "points deducted" + point;
}
function main() {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the speed\n", (speed) => {
        let s = parseInt(speed);
     if (isNaN(s)){
         console.log("Please enter  number \n");
         main();
     } 
     console.log(checkSpeed(s));
     rl.close();
 });


}
main();