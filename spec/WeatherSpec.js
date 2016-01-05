describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("should return false if weather is not stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(weather.stormy()).toEqual(false);
  })

  it("should return true if weather is stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.stormy()).toEqual(true);
  })
})
