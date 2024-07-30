export function findItemsOver20(list){
    let result = [];
    for(let i=0; i<list.length; i++){
      if(list[i].qty > 20){
        result.push(list[i]);
      }
    }
    return result;
  }