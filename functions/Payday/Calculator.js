class Calculator {
  calculateNextPayDay() {
    let payDay1 = 6;
    let payDay2 = 21;
    let now = new Date();
    let done = false;
    let targetPayDate = 0;

    if (now.getDate() < payDay1 || now.getDate() > payDay2) { //If we're before the 6th or after the 21st, our next payday is the 6th
      targetPayDate = payDay1;
    } else { //otherwise we're after the 6th but before the 21st so our next payday is the 21st
      targetPayDate = payDay2;
    }

    while (!done) {
      var datetime = new Date(now.getMonth() + 1 + '-' + targetPayDate + '-' + now.getFullYear());
      if (datetime.getDay() === 0 || datetime.getDay() === 6) { //if we're a Saturday or a Sunday we need to decrement
        targetPayDate--;
      } else {
        done = true;
      }
    }

    return datetime;
  }
}

module.exports = Calculator;
