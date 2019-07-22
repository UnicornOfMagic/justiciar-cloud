class Calculator {
  calculateNextPayDay(now) {
    let payDay1 = 6;
    let payDay2 = 21;
    let done = false;
    let targetPayDate = 0;
    let rolloverToNextMonth = false;
    let rolloverToNextYear = now.getMonth() == 11;
    let targetMonth = now.getMonth();
    let targetYear = rolloverToNextYear ? now.getFullYear() + 1 : now.getFullYear();

    if (now.getDate() < payDay1) { //If we're before the 6th or after the 21st, our next payday is the 6th
      targetPayDate = payDay1;
    } else if (now.getDate() > payDay2) {
      rolloverToNextMonth = true;
      targetPayDate = payDay1;
    } else { //otherwise we're after the 6th but before the 21st so our next payday is the 21st
      targetPayDate = payDay2;
    }

    while (!done) {
      var datetime = new Date(targetMonth + 1 + '-' + targetPayDate + '-' + targetYear);
      if (datetime.getDay() === 0 || datetime.getDay() === 6) { //if we're a Saturday or a Sunday we need to decrement
        targetPayDate--;
      } else {
        done = true;
      }
    }

    if (rolloverToNextMonth) {
      if (rolloverToNextYear) {
        datetime = new Date('01-' + targetPayDate + '-' + targetYear);
      } else {
        datetime = new Date(targetMonth + 2 + '-' + targetPayDate + '-' + targetYear);
      }
    }

    return datetime;
  }
}

module.exports = Calculator;
