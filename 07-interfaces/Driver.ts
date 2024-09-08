import { GolfCoach } from "./GolfCoach";
import { FootballCoach } from "./FootballCoach";
import { Coach } from "./Coach";

let myGolfCoach = new GolfCoach();
let myFootballCoach = new FootballCoach();

// declare an array for coaches ... initially empty

let theCoaches: Coach[] = []; 

theCoaches.push(myFootballCoach);
theCoaches.push(myGolfCoach);

for (const tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}