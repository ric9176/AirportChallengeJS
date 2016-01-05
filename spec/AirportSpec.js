describe("Airport", function() {
  var airport;
  var plane = null

  beforeEach(function() {
    airport = new Airport();
    airportCapacity = new Airport(3)
    plane = { land: 666, takeoff: 666 };
    spyOn(plane, 'land');
    spyOn(plane, 'takeoff');
  });

  describe('#planes', function() {
    it('airport has no planes at start', function() {
      expect(airport.planes.length).toEqual(0)
    })

    it('airport contains landed plane', function() {
      airport.land_plane(plane)
      expect(airport.planes).toContain(plane)
    })
  })

  describe('#land_plane', function() {
    it('instructs a plane to land', function() {
      expect(airport.land_plane(plane)).toEqual("Plane has landed");
    })
    it('prvents landing when the airport is full', function() {
      for (var i = 0; i < 8; i++){
        airport.land_plane(plane)
      }
        expect( function () { airport.land_plane(plane) } ).toThrow("Can't land plane, airport full!")
    })
  })

  describe('#takeoff_plane', function() {
    it('instructs a plane to take off', function() {
      expect(airport.takeoff_plane(plane)).toEqual("Plane has taken off");
    })
  })

  it("allows default capacity to be set", function() {
    for (var i = 0; i < 3; i++){
    airportCapacity.land_plane(plane)
  }
    expect( function () { airportCapacity.land_plane(plane) } ).toThrow("Can't land plane, airport full!")
  })


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
