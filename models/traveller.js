const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(function (journey){
    return journey.startLocation;
  });
    return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(function (journey){
    return journey.endLocation;
  });
    return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (journeyTransport) {
  const result = this.journeys.filter((journey) => journey.transport === journeyTransport);
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => journey.distance > minDistance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = this.journeys.reduce(function (runningTotal, journey){
    return runningTotal + journey.distance;
  }, 0);
    return totalDistanceTravelled;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
