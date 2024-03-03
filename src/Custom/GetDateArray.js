  // Create a new Date object

  function getDateArray(){
    var currentDate = new Date();

    // Get the month as a number (0-11)
    var month = currentDate.getMonth();
  
    // Get the year
    var year = currentDate.getFullYear();
  
    // Get the total number of days in the month
    var totalDays = new Date(year, month + 1, 0).getDate();
    const todayCurrentDate = currentDate.getDate()
    // Generate an array containing all the days of the month
    var daysOfMonth = [];
    for (var i = 1; i <= totalDays; i++) {
      if((todayCurrentDate + 1) == i){
          break ;
      }
      daysOfMonth.push(String(i));
    }
    
    // Print or use the array containing all the days of the month
    return daysOfMonth
  }
  // Create a new Date object

  export default getDateArray