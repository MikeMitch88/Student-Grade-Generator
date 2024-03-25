function calculateGrade(Marks){
    if (Marks >= 79 && Marks <=100){
        return `A`;
    }
    else if(Marks >= 60 && Marks <=79){
        return `B`;
    }
    else if(Marks >= 50 && Marks <= 59){
        return `C`;
    }
    else if(Marks >= 40 && Marks <= 49){
        return `D`;
    }
    else{
        return `E`;
    }
}
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question("Enter the student's marks: ",(marks) => {
        marks = parseInt(marks);
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        const grade = calculateGrade(marks);
        console.log(`The student's grade is: ${grade}`);
    } else {
        console.log("Please enter a valid mark between 0 amd 100.");
    }
    readline.close();
    });
}

main();