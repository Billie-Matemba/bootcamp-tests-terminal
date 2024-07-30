export function yearsAgo(year){
    const date = new Date(`${year}-01-01`).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - date;
  }
  