export function countAllFromTown(regNumbersString, town){
    const regNumbersArray = regNumbersString.split(',');
    let townNumberCount = 0;
    for (let i = 0; i < regNumbersArray.length; i++) {
        const regNumber = regNumbersArray[i].trim();
        if (regNumber.startsWith(town)) {
            townNumberCount++;
            
        }
    }
    return townNumberCount;
}