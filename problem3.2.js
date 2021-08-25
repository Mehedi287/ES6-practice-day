// dui ta parameter sho akta arro function lekho , input value duitr sate 2 add koro and , result ka duita gun kore return koro 

const mathOperation = (number1, number2) => {
    const n1 = number1 + 2;
    const n2 = number2 + 2;
    const result = n1 * n2;
    return result;
}
const result = mathOperation(2, 3);
console.log(result);