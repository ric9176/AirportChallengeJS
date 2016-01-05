describe("Airport", function() {
  var airport;
  var plane = null;
  var weather = null;

  beforeEach(function() {
    plane = { land: function() { return true }, takeoff: function() { return true }
    };
    weather = { stormy: function() { return false }
    };
    airport = new Airport(8, weather);
    smallerAirport = new Airport(3, weather);
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
  })

  describe('#takeoff_plane', function() {
    it('instructs a plane to take off', function() {
      expect(airport.takeoff_plane(plane)).toEqual("Plane has taken off");
    })
  })

  it("allows default capacity to be set", function() {
    for (var i = 0; i < 3; i++){
      smallerAirport.land_plane(plane)
    }
    expect( function () { smallerAirport.land_plane(plane) } ).toThrow("Can't land plane, airport full!")
  })

  describe("When weather is stormy", function() {
    beforeEach(function() {
      spyOn(weather, 'stormy').and.callFake(function(){
        return true
      });
    });

    it('prevents landing when the weather is stormy', function() {
      expect( function () { airport.land_plane(plane) } ).toThrow("Can't land plane, weather is stormy!")
    })
    it('prevents take off when the weather is stormy', function() {
      expect( function () { airport.takeoff_plane(plane) } ).toThrow("Can't take off plane, weather is stormy!")
    })
  });

});
