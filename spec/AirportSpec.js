describe("Airport", function() {
  var airport;
  var plane = null;
  var weather = null;

  beforeEach(function() {
    airport = new Airport();
    airportCapacity = new Airport(3)
    plane = { land: 666, takeoff: 666 };
    weather = { stormy: false};
    spyOn(plane, 'land');
    spyOn(plane, 'takeoff');
    spyOn(weather, 'stormy');
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
    it('prevents landing when the airport is full', function() {
      for (var i = 0; i < 8; i++){
        airport.land_plane(plane)
      }
        expect( function () { airport.land_plane(plane) } ).toThrow("Can't land plane, airport full!")
    })
    xit('prevents landing when the weather is stormy', function() {
      weather = { stormy: true };
      expect( function () { airport.land_plane(plane) } ).toThrow("Can't land plane, weather is stormy!")
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
