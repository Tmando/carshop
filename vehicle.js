var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType) {
        this.producer = producer;
        this.weight = weight;
        this.speed = speed;
        this.year = year;
        this.kilometersLeft = kilometersLeft;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
    }
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, doors) {
        var _this = _super.call(this, producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType) || this;
        _this.doors = doors;
        return _this;
    }
    return Car;
}(Vehicle));
var Motorbike = (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType) {
        return _super.call(this, producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType) || this;
    }
    return Motorbike;
}(Vehicle));
var Bus = (function (_super) {
    __extends(Bus, _super);
    function Bus(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, doors) {
        var _this = _super.call(this, producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType) || this;
        _this.doors = doors;
        return _this;
    }
    return Bus;
}(Vehicle));
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, doors) {
        var _this = _super.call(this, producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType) || this;
        _this.doors = doors;
        return _this;
    }
    return Truck;
}(Vehicle));
var Seller = (function () {
    function Seller(testArray) {
        this.vehiclesArray = testArray;
    }
    Seller.prototype.showArray = function () {
        console.log(this.vehiclesArray);
    };
    return Seller;
}());
