class Car
{
    manufacturer;
    model;
    year;
    avaragespeed;
    constructor(manufacturer,model, year,avaragespeed)
    {
        this.manufacturer=manufacturer;
        this.model=model;
        this.year=year;
        this.avaragespeed=avaragespeed;
    }
    print()
    {
        console.log(`Car :
            ${this.manufacturer} 
            ${this.model} 
            ${this.year}
            ${this.avaragespeed}
            `)
    }
    calculateTravelTime(distance) {
        const travelTime = distance / this.avaragespeed;
        const restHours = Math.floor(travelTime / 4);
        return travelTime + restHours;
    }
}
const car = new Car("Toyota","Corolla",2002,120);
car.print();
let distance = 400; 
console.log(`Необхідний час для подолання ${distance} км: ${car.calculateTravelTime(distance).toFixed(2)} годин`);

class Drib
{
    chiselnik;
    znamennik;
    constructor(chiselnik, znamennik) {
        this.chiselnik = chiselnik;
        this.znamennik = znamennik;
    }
    add(drib) {
        const chiselnik_s = this.chiselnik * drib.znamennik + drib.chiselnik * this.znamennik;
        const znamennik_s = this.znamennik * drib.znamennik;
        console.log(new Drib(chiselnik_s,znamennik_s).simplify());
    }
    subtract(drib) {
        const chiselnik_s = this.chiselnik * drib.znamennik - drib.chiselnik * this.znamennik;
        const znamennik_s = this.znamennik * drib.znamennik;
        console.log(new Drib(chiselnik_s,znamennik_s).simplify());
    }
    multiply(drib) {
        const chiselnik_s = this.chiselnik * drib.chiselnik;
        const znamennik_s = this.znamennik * drib.znamennik;
        console.log(new Drib(chiselnik_s,znamennik_s).simplify());
    }
    divide(drib) {
        const chiselnik_s = this.chiselnik * drib.znamennik;
        const znamennik_s = this.znamennik * drib.chiselnik;
        console.log(new Drib(chiselnik_s,znamennik_s).simplify());
    }
    simplify() {
        let a = Math.abs(this.chiselnik);
        let b = Math.abs(this.znamennik);
    
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
    
        const divisor = a; 
        this.chiselnik /= divisor;
        this.znamennik /= divisor;
    
        return this;
    }
}
const Drib1 = new Drib(1, 5);
const Drib2 = new Drib(5, 3);
Drib1.add(Drib2);
Drib1.subtract(Drib2);
Drib1.multiply(Drib2);
Drib1.divide(Drib2);
const Drib3 = new Drib(12, 3);
Drib3.simplify();
console.log(Drib3); 
class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    displayTime() {
        const pad = (num) => num.toString().padStart(2, '0');
        return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
    }

    changeBySeconds(seconds) {
        const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
        this.hours = Math.floor((totalSeconds / 3600) % 24);
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
    }

    changeByMinutes(minutes) {
        this.changeBySeconds(minutes * 60);
    }

    changeByHours(hours) {
        this.changeBySeconds(hours * 3600);
    }
}

const time = new Time(20, 30, 45);
console.log(time.displayTime());
time.changeBySeconds(30);
console.log(time.displayTime());
time.changeByMinutes(10);
console.log(time.displayTime());
time.changeByHours(3);
console.log(time.displayTime());
