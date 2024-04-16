/* Your Code Here */
// Create an employee record from given data
function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Create employee records for multiple employees
  function createEmployeeRecords(employeesData) {
    return employeesData.map(employeeData => createEmployeeRecord(employeeData));
  }
  
  // Add a time in event for an employee on a specific date
  // Add a time in event for an employee on a specific date
function createTimeInEvent(employee, dateStamp) {
  // Split the dateStamp to extract date and hour
  const [date, time] = dateStamp.split(' ');

  // Extract the hour from the time
  const hour = parseInt(time.slice(0, 4)); // Extracting the first four characters as the hour

  // Create the time in event object
  const timeInEvent = {
    type: "TimeIn", // 1) Set type to "TimeIn"
    hour: hour, // 3) Extract correct hour
    date: date // 2) Extract correct date
  };

  // Push time in event object to employee's timeInEvents array
  employee.timeInEvents.push(timeInEvent);

  return employee;
}

  
  // Add a time out event for an employee on a specific date
  function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    });
    return employee;
  }
  
  // Calculate hours worked by an employee on a specific date
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date);
    const timeOut = employee.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100; // assuming time in and out are always on the hour
  }
  
  // Calculate wages earned by an employee on a specific date
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  // Calculate total wages earned by an employee
  //function allWagesFor(employee) {
    //const datesWorked = employee.timeInEvents.map(event => event.date);
    //return datesWorked.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employee, date), 0);
//}
  
  // Find an employee by first name
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  // Calculate total payroll for all employees
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }
  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

