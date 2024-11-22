var Object = new Object();

var obj = {};
obj.name = "Olena";
obj.name = "Mukola";
obj.number = 1013;
obj.address = "Soborna 40";
console.log(`name = ${obj.name}.address : ${obj.address}`)

let product = {
    name : "Motorola 60",
    price : 3500,
    memory : 256,
    isLocked : true,
    applications: ["Facebok","PlayMarket","Viber"],
    owner : {
        name : "Vitia",
        surname : "Ivanchuk"
    }
}
console.log(product)

let time = {
    hours: 10,
    minutes: 59,
    seconds: 59,

    displayTime() {
        const pad = (num) => num.toString().padStart(2, '0');
        console.log( `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`);
    },

    addSecond() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours >= 24) {
            this.hours = 0;
        }
    },

    subtractSecond() {
        this.seconds--;
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--;
        }
        if (this.minutes < 0) {
            this.minutes = 59;
            this.hours--;
        }
        if (this.hours < 0) {
            this.hours = 23;
        }
    },

    showCurrentTime() {
        document.write(this.displayTime());
    }
};


time.displayTime();
time.addSecond();
time.displayTime();
time.subtractSecond();
time.displayTime();
time.showCurrentTime()

let car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2020,
    averageSpeed: 80,
    displayInfo() {
        return `Виробник: ${this.manufacturer}, Модель: ${this.model}, Рік випуску: ${this.year}, Середня швидкість: ${this.averageSpeed} км/год`;
    },

    calculateTravelTime(distance) {
        const travelTime = distance / this.averageSpeed;
        const restHours = Math.floor(travelTime / 4);
        return travelTime + restHours;
    }
};

console.log(car.displayInfo());
let distance = 400; 
console.log(`Необхідний час для подолання ${distance} км: ${car.calculateTravelTime(distance).toFixed(2)} годин`);
