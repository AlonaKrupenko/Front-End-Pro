"use strict";

class Human {
  constructor(firstName, lastName, birthYearPar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._birthYear = birthYearPar;
  }

  get birthYear() {
    return this._birthYear;
  }

  static isHuman(obj) {
    return obj instanceof Human;
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Sudent extends Human {
  marksArr = new Array(10);
  attendanceArr = new Array(10);
  #receivedPayment = 0;

  get checkPayment() {
    return this.#receivedPayment;
  }

  set checkPayment(value) {
    if (value < 1000) throw new Error("Payment ammount is 1000 per month");
    this.#receivedPayment = value;
  }

  averageScore = function () {
    return this.marksArr.reduce((a, b) => a + b) / this.marksArr.length;
  };

  present = function () {
    if (this.attendanceArr.length > 10) {
      throw new Error("Max length of array with attandance is 10");
    }
    for (let i = 0; i <= this.attendanceArr.length - 1; i++) {
      if (this.attendanceArr[i] === undefined) {
        this.attendanceArr[i] = true;
        return;
      }
    }
  };

  absent = function () {
    if (this.attendanceArr.length > 10) {
      throw new Error("Max length of array with attandance is 10");
    }
    for (let i = 0; i <= this.attendanceArr.length - 1; i++) {
      if (this.attendanceArr[i] === undefined) {
        this.attendanceArr[i] = false;
        return;
      }
    }
  };

  mark = function (mark) {
    if (this.marksArr.length > 10) {
      throw new Error("Max length of array with makrs is 10");
    }
    for (let i = 0; i <= this.marksArr.length - 1; i++) {
      if (this.marksArr[i] === undefined) {
        this.marksArr[i] = mark;
        return;
      }
    }
  };

  summary = function () {
    const attendedAverage =
      this.attendanceArr.reduce(function (acc, el) {
        if (el === true) {
          ++acc;
        }
        return acc;
      }, 0) / this.attendanceArr.length;

    const averageScoreCounted = this.averageScore();

    if (attendedAverage >= 0.9 && averageScoreCounted >= 9) {
      return "Ути какой молодчинка!";
    } else if (attendedAverage >= 0.9 || averageScoreCounted >= 9) {
      return "Норм, но можно лучше";
    } else {
      return "Редиска!";
    }
  };
}
