function getTaxRate(salary){
    if (salary <= 24000 ){
        return 10;
    }
    else if(salary > 24000 && salary <= 32333.33){
        return 25;
    }
    else if(salary > 32333.33 && salary <= 49999.99){
        return 30;
    }
    else if(salary > 49999.99 && salary <= 50000){
        return 32.5;
    }
    else {
        return 35;
    }
}
function salaryAfterpaye(salary){
    const rate = getTaxRate(salary) / 100;
    const taxable = salary * rate;
    const income = salary - taxable;
    const net = income + 2640;
    return net;
}
function nhifDeductable(income) {
    if (income <= 6000) {
        return  150;
    } else if (income >= 6000 && income <= 7999) {
        return  300;
    } else if (income >= 8000 && income <= 11999) {
        return  400;
    } else if (income >= 12000 && income <= 14999) {
        return  500;
    } else if (income >= 15000 && income <= 19999) {
        return  600;
    } else if (income >= 20000 && income <= 24999) {
        return  750;
    } else if (income >= 25000 && income <= 29999) {
        return  850;
    } else if (income >= 30000 && income <= 34999) {
        return  900;
    } else if (income >= 35000 && income <= 39999) {
        return  950;
    } else if (income >= 40000 && income <= 44999) {
        return  1000;
    } else if (income >= 45000 && income <= 49999) {
        return  1100;
    } else if (income >= 50000 && income <= 59999) {
        return  1200;
    } else if (income >= 60000 && income <= 69999) {
        return  1300;
    } else if (income >= 70000 && income <= 79999) {
        return  1400;
    } else if (income >= 80000 && income <= 89999) {
        return  1500;
    } else if (income >= 90000 && income <= 99999) {
        return  1600;
    } else{
        return 700;
    }


}
function NetSalary(salary){
    const afterpay = salaryAfterpaye(salary);
    const nhif = nhifDeductable(salary);
    return afterpay - nhif;
}
function main() {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter your gross salary\n", (salary) => {
        let s = parseInt(salary);
     if (isNaN(s)){
         console.log("Please enter  number \n");
         main();
     } 
     console.log("if your gross is ",salary, "Your net is",NetSalary(salary), "This is theft");
     rl.close();
 });


}
main();