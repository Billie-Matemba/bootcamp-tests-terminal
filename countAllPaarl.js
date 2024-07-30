export function allPaarl(regNumber){
    var regNumberForPaarl = regNumber.split(', ');
    var result = [];
    for (let i=0; i<regNumberForPaarl.length; i++){
      var reg = regNumberForPaarl[i];
      if (reg.startsWith('CJ')){
        result.push(reg);
      }
    }
    return result;
  }
  