export function findItemsOver(list, threshold){
    let result = [];
    for(let i=0; i<list.length; i++){
      if(list[i].qty > threshold){
        result.push(list[i]);
      }
    }
    return result;
  }