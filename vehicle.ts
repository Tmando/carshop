abstract class Vehicle {
  producer:string;
  weight:number;
  speed:number;
  year:number;
  kilometersLeft:number;
  numberOfSeats:number;
  fuelType:string;
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string){
    this.producer = producer;
    this.weight = weight;
    this.speed = speed;
    this.year = year;
    this.kilometersLeft = kilometersLeft;
    this.numberOfSeats = numberOfSeats;
    this.fuelType = fuelType;

  }
  }



class Car extends Vehicle{
  doors:number;
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string,doors:number){
    super(producer,weight,speed,year,kilometersLeft,numberOfSeats,fuelType);
    this.doors = doors;
  }




}

class Motorbike extends Vehicle{
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string){
    super(producer,weight,speed,year,kilometersLeft,numberOfSeats,fuelType);
  }



}

class Bus extends Vehicle{
  doors:number;
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string,doors:number){
    super(producer,weight,speed,year,kilometersLeft,numberOfSeats,fuelType);
    this.doors = doors;
  }

}

class Truck extends Vehicle{
  doors:number;
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string,doors:number){
    super(producer,weight,speed,year,kilometersLeft,numberOfSeats,fuelType);
    this.doors = doors;
  }


}

class Seller{
  vehiclesArray:Array<Vehicle>;
  firstVehicle:Vehicle;
  secoundVehicle:Vehicle;
  thirdVehicle:Vehicle;
  fourthVehicle:Vehicle;
  newCar:Vehicle;
  constructor(testArray:Array<Vehicle>){
  this.vehiclesArray =testArray;
  }
  showArray(){
    console.log(this.vehiclesArray);
  }

}
