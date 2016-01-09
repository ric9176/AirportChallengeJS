

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
