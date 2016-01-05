describe("Landing and Taking off", function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("Airport can tell a plane to land", function() {
    expect(airport.land_plane(plane)).toEqual("Plane has landed")
    expect(plane.status).toEqual("Landed")
    expect(airport.planes).toContain(plane)
  });

  it("Airport cannot tell a plane to land if it is already landed", function() {
    airport.land_plane(plane)
    expect( function() { airport.land_plane(plane) } ).toThrow("The plane has already landed!")
  });

  it("Airport can tell a plane to take off", function() {
    airport.land_plane(plane)
    expect(airport.takeoff_plane(plane)).toEqual("Plane has taken off")
    expect(plane.status).toEqual("Flying")
    expect(airport.planes).not.toContain(plane)
  });

  it("Airport cannot tell a plane to take off if it is flying", function() {
    expect( function() { airport.takeoff_plane(plane) } ).toThrow("The plane has already taken off!")
  });

});
