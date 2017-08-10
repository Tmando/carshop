abstract class Vehicle {
  producer:string;
  weight:number;
  speed:number;
  year:number;
  kilometersLeft:number;
  numberOfSeats:number;
  fuelType:string;
  imgSrc:string;
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string,imgSrc:string){
    this.producer = producer;
    this.weight = weight;
    this.speed = speed;
    this.year = year;
    this.kilometersLeft = kilometersLeft;
    this.numberOfSeats = numberOfSeats;
    this.fuelType = fuelType;
    this.imgSrc = imgSrc;


  }
  render():string{

          let writeOut:string = '<li>' + 'Producer ' + this.producer + '</li>';
          writeOut += '<li>' + 'Weight ' + this.weight + '</li>';
          writeOut += '<li>' + 'Speed ' + this.speed + '</li>';
          writeOut += '<li>' + 'Year ' + this.year + '</li>';
          writeOut += '<li>' + 'Kilometers Left ' + this.kilometersLeft + '</li>';
          writeOut += '<li>' + 'Seats ' + this.numberOfSeats + '</li>';
          writeOut += '<li>' + 'Fuel Type ' + this.fuelType + '</li>';
    return writeOut;
  }
  getImgSrc():string{
    return this.imgSrc;
  }
  getProducer():string{
    return this.producer;
  }
  }



class Car extends Vehicle{
  doors:number;
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string,doors:number,imgSrc:string){
    super(producer,weight,speed,year,kilometersLeft,numberOfSeats,fuelType,imgSrc);
    this.doors = doors;
  }
  render():string{
    let writeOut:string = "<div class=\"row carStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + super.getProducer() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li>' + 'Doors ' + this.doors + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }




}

class Motorbike extends Vehicle{
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string,imgSrc:string){
    super(producer,weight,speed,year,kilometersLeft,numberOfSeats,fuelType,imgSrc);
  }
  render():string{
    let writeOut:string = "<div class=\"row motorbikeStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getProducer() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }



}

class Bus extends Vehicle{
  doors:number;
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string,doors:number,imgSrc:string){
    super(producer,weight,speed,year,kilometersLeft,numberOfSeats,fuelType,imgSrc);
    this.doors = doors;
  }
  render():string{
    let writeOut:string = "<div class=\"row busStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getProducer() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li>' + 'Doors ' + this.doors + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }

}

class Truck extends Vehicle{
  doors:number;
  constructor(producer:string,weight:number,speed:number,year:number,kilometersLeft:number,numberOfSeats:number,fuelType:string,doors:number,imgSrc:string){
    super(producer,weight,speed,year,kilometersLeft,numberOfSeats,fuelType,imgSrc);
    this.doors = doors;
  }
  render():string{
    let writeOut:string = "<div class=\"row truckStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getProducer() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li>' + 'Doors ' + this.doors + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }


}

class Seller{
  vehiclesArray:Array<Vehicle>;
  firstVehicle:Vehicle;
  secoundVehicle:Vehicle;
  thirdVehicle:Vehicle;
  fourthVehicle:Vehicle;
  newCar:Vehicle;
  vehicleCounterMap:Map<String,number>;
  constructor(testArray:Array<Vehicle>){
  this.vehiclesArray =testArray;
  this.vehicleCounterMap = new Map<String,number>();
  }
  showArray(){
    console.log(this.vehiclesArray);
  }
  renderAll(){
    for(let i= 0;i<this.vehiclesArray.length;i++){
      document.getElementById('vehicleList').innerHTML += this.vehiclesArray[i].render();
    }
  }
  countTypeOfVehicles(){
    this.vehicleCounterMap.set('Cars',0);
    this.vehicleCounterMap.set('Motorbikes',0);
    this.vehicleCounterMap.set('Bus',0);
    this.vehicleCounterMap.set('Trucks',0);
    for(let i= 0;i<this.vehiclesArray.length;i++){
      if(this.vehiclesArray[i] instanceof Car){
        let val:number = this.vehicleCounterMap.get('Cars')+1;
        this.vehicleCounterMap.set('Cars',val);
      }
      if(this.vehiclesArray[i] instanceof Motorbike){
        let val:number = this.vehicleCounterMap.get('Motorbikes')+1;
        this.vehicleCounterMap.set('Motorbikes',val);

      }
      if(this.vehiclesArray[i] instanceof Bus){
        let val:number = this.vehicleCounterMap.get('Bus')+1;
        this.vehicleCounterMap.set('Bus',val);

      }
      if(this.vehiclesArray[i] instanceof Truck){
        let val:number = this.vehicleCounterMap.get('Trucks')+1;
        this.vehicleCounterMap.set('Trucks',val);
      }
    }
    console.log(this.vehicleCounterMap);
  }



}
