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
    function Vehicle(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, imgSrc) {
        this.producer = producer;
        this.weight = weight;
        this.speed = speed;
        this.year = year;
        this.kilometersLeft = kilometersLeft;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.imgSrc = imgSrc;
    }
    Vehicle.prototype.render = function () {
        var writeOut = '<li>' + 'Producer ' + this.producer + '</li>';
        writeOut += '<li>' + 'Weight ' + this.weight + '</li>';
        writeOut += '<li>' + 'Speed ' + this.speed + '</li>';
        writeOut += '<li>' + 'Year ' + this.year + '</li>';
        writeOut += '<li>' + 'Kilometers Left ' + this.kilometersLeft + '</li>';
        writeOut += '<li>' + 'Seats ' + this.numberOfSeats + '</li>';
        writeOut += '<li>' + 'Fuel Type ' + this.fuelType + '</li>';
        return writeOut;
    };
    Vehicle.prototype.getImgSrc = function () {
        return this.imgSrc;
    };
    Vehicle.prototype.getProducer = function () {
        return this.producer;
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, doors, imgSrc) {
        var _this = _super.call(this, producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, imgSrc) || this;
        _this.doors = doors;
        return _this;
    }
    Car.prototype.render = function () {
        var writeOut = "<div class=\"row carStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getProducer.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li>' + 'Doors ' + this.doors + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Car;
}(Vehicle));
var Motorbike = (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, imgSrc) {
        return _super.call(this, producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, imgSrc) || this;
    }
    Motorbike.prototype.render = function () {
        var writeOut = "<div class=\"row motorbikeStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getProducer.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Motorbike;
}(Vehicle));
var Bus = (function (_super) {
    __extends(Bus, _super);
    function Bus(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, doors, imgSrc) {
        var _this = _super.call(this, producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, imgSrc) || this;
        _this.doors = doors;
        return _this;
    }
    Bus.prototype.render = function () {
        var writeOut = "<div class=\"row busStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getProducer.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li>' + 'Doors ' + this.doors + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Bus;
}(Vehicle));
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, doors, imgSrc) {
        var _this = _super.call(this, producer, weight, speed, year, kilometersLeft, numberOfSeats, fuelType, imgSrc) || this;
        _this.doors = doors;
        return _this;
    }
    Truck.prototype.render = function () {
        var writeOut = "<div class=\"row truckStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getProducer.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li>' + 'Doors ' + this.doors + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Truck;
}(Vehicle));
var Seller = (function () {
    function Seller(testArray) {
        this.vehiclesArray = testArray;
        this.vehicleCounterMap = new Map();
    }
    Seller.prototype.showArray = function () {
        console.log(this.vehiclesArray);
    };
    Seller.prototype.renderAll = function () {
        for (var i = 0; i < this.vehiclesArray.length; i++) {
            document.getElementById('vehicleList').innerHTML += this.vehiclesArray[i].render();
        }
    };
    Seller.prototype.countTypeOfVehicles = function () {
        this.vehicleCounterMap.set('Cars', 0);
        this.vehicleCounterMap.set('Motorbikes', 0);
        this.vehicleCounterMap.set('Bus', 0);
        this.vehicleCounterMap.set('Trucks', 0);
        for (var i = 0; i < this.vehiclesArray.length; i++) {
            if (this.vehiclesArray[i] instanceof Car) {
                var val = this.vehicleCounterMap.get('Cars') + 1;
                this.vehicleCounterMap.set('Cars', val);
            }
            if (this.vehiclesArray[i] instanceof Motorbike) {
                var val = this.vehicleCounterMap.get('Motorbikes') + 1;
                this.vehicleCounterMap.set('Motorbikes', val);
            }
            if (this.vehiclesArray[i] instanceof Bus) {
                var val = this.vehicleCounterMap.get('Bus') + 1;
                this.vehicleCounterMap.set('Bus', val);
            }
            if (this.vehiclesArray[i] instanceof Truck) {
                var val = this.vehicleCounterMap.get('Trucks') + 1;
                this.vehicleCounterMap.set('Trucks', val);
            }
        }
        console.log(this.vehicleCounterMap);
    };
    return Seller;
}());
