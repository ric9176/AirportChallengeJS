(function () {
  'use strict';
}());

describe('Airport', function() {
  var airport;
  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

});

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
//
// As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy
//
// As an air traffic controller
// To ensure safety
// I want to prevent landing when the airport is full
//
// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate


//
// PLANE
// status
//
// def land
// def takeoff
//
// AIRPORT
// capacity
// land(plane) // checks weather, checks capacity, calls land on the plane
// takeoff(plane) // checks weather, calls takeoff on the plane
//
// WEATHER // is instantiated by airport
// report
