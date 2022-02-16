"use strict";

function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.marksArr = [];
  this.attendanceArr = [];

  this.marksArr.length = 10;
  this.attendanceArr.length = 10;

  this.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
  };

  this.averageScore = function () {
    return this.marksArr.reduce((a, b) => a + b) / this.marksArr.length;
  };

  this.present = function () {
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

  this.absent = function () {
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

  this.mark = function (mark) {
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

  this.summary = function () {
    this.attendedAverage =
      this.attendanceArr.reduce(function (acc, el) {
        if (el === true) {
          ++acc;
        }
        return acc;
      }, 0) / this.attendanceArr.length;

    this.averageScoreCounted = this.averageScore();

    if (this.attendedAverage >= 0.9 && this.averageScoreCounted >= 9) {
      return "Ути какой молодчинка!";
    } else if (this.attendedAverage >= 0.9 || this.averageScoreCounted >= 9) {
      return "Норм, но можно лучше";
    } else {
      return "Редиска!";
    }
  };
}
