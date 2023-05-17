const getRandomNumber = (maxNumber) => {
    const random = Math.random();
    const randomNumber = Math.round(random*maxNumber);
    if (randomNumber === 0 ) return 1;
    else return randomNumber;  
}
 
export default getRandomNumber;