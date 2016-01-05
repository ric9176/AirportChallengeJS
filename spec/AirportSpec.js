describe("Airport", function() {
  var airport;
  var plane = null

  beforeEach(function() {
    airport = new Airport();
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
  })

  describe('#takeoff_plane', function() {
    it('instructs a plane to take off', function() {
      expect(airport.takeoff_plane(plane)).toEqual("Plane has taken off");
    })
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
