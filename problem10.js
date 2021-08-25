// problem 10 3 ta parameter ula akta function neba , tar maje third parameter ar valur defulr hesavea 7 thakvea ,3 ta parameter ar gug fol return korvea 


function addThreeNumber(num1, num2, num3 = 7) {
    const result = num1 + num2 + num3;
    return result;
}
console.log(addThreeNumber(1, 2));