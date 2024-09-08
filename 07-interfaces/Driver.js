"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GolfCoach_1 = require("./GolfCoach");
const FootballCoach_1 = require("./FootballCoach");
let myGolfCoach = new GolfCoach_1.GolfCoach();
let myFootballCoach = new FootballCoach_1.FootballCoach();
// declare an array for coaches ... initially empty
let theCoaches = [];
theCoaches.push(myFootballCoach);
theCoaches.push(myGolfCoach);
for (const tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
