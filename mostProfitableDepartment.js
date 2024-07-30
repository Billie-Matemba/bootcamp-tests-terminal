export function mostProfitableDepartment(salesData){
    let salesByDepartment = {};
    //console.log(salesByDepartment);
    for(let i=0; i<salesData.length; i++){
      let department = salesData[i].department;
      let sales = salesData[i].sales;
      if(salesByDepartment[department]){
        salesByDepartment[department] += sales;
      } else {
        salesByDepartment[department] = sales;
      }
    }
    let maxSales = 0;
    let maxDepartment = '';
    for(let department in salesByDepartment){
      if(salesByDepartment[department] > maxSales){
        maxSales = salesByDepartment[department];
        maxDepartment = department;
      }
    }
    return maxDepartment;
  }