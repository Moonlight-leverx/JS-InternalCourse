function begin() {
    var fern1 = new Fern('Staghorn Fern', 'Popular type of indoor ferns', 'Platycerium family',
    25, 'Indoor ferns', '15', 'Not dangerous', 'Asia', 'Food industry', 'Da Vinci');

    var spruce1 = new Spruce('Norway Spruce', 'Short, needle-like, evergreen foliage is dark green', 
    'Norway Spruces', 45, 'Evergreen needles', '19', 'Not dangerous', 'Norway', 'Medicine', 'Sandy, loam, or clay')

    var fern_string = JSON.stringify(fern1, "", 1);
    var spruce_string = JSON.stringify(spruce1, "", 1);

    parsedFern = JSON.parse(fern_string);
    parsedSpruce = JSON.parse(spruce_string);

    console.log('JSON-string:' + '\n' + fern_string);
    console.log(parsedFern);

    console.log('JSON-string:' + '\n' + spruce_string);
    console.log(parsedSpruce);

}

function Plant(name, description, species, age, class_p,
    inflorescenceSize, hazardClass, habitat, application) {

    this.name = name;
    this.description = description;
    this.species = species;
    this.age = age;
    this.class_p = class_p;
    this.inflorescenceSize = inflorescenceSize;
    this.hazardClass = hazardClass;
    this.habitat = habitat;
    this.application = application;

    this.getName = function () {
        return name;
    }

    this.setName = function (value) {
        this.name = value;
    }

    this.getDescription = function () {
        return description;
    }

    this.setDescription = function (value) {
        this.description = value;
    }

    this.getSpecies = function () {
        return species;
    }

    this.setSpecies = function (value) {
        this.species = value;
    }

    this.getAge = function () {
        return age;
    }

    this.setAge = function (value) {
        this.age = value;
    }

    this.getClass_p = function () {
        return class_p;
    }

    this.setClass_p = function (value) {
        this.class_p = value;
    }

    this.getInflorescenceSize = function () {
        return inflorescenceSize;
    }

    this.setInflorescenceSize = function (value) {
        this.inflorescenceSize = value;
    }

    this.getHazardClass = function () {
        return hazardClass;
    }

    this.setHazardClass = function (value) {
        this.hazardClass = value;
    }

    this.getHabitat = function () {
        return habitat;
    }

    this.setHabitat = function (value) {
        this.habitat = value;
    }

    this.getApplication = function () {
        return application;
    }

    this.setApplication = function (value) {
        this.application = value;
    }

}



function Fern(name, description, species, age, class_p, inflorescenceSize,
    hazardClass, habitat, application, discoverer) {

    Plant.call(this, name, description, species, age, class_p, inflorescenceSize, hazardClass, habitat, application)

    this.discoverer = discoverer;

    this.getDiscoverer = function () {
        return discoverer;
    }

    this.setDiscoverer = function (value) {
        this.discoverer = value;
    }
}


function Spruce(name, description, species, age, class_p, inflorescenceSize,
    hazardClass, habitat, application, placeOfGrowth) {

    Plant.call(this, name, description, species, age, class_p, inflorescenceSize, hazardClass, habitat, application)

    this.placeOfGrowth = placeOfGrowth;

    this.getPlaceOfGrowth = function () {
        return placeOfGrowth;
    }

    this.setPlaceOfGrowth = function (value) {
        this.placeOfGrowth = value;
    }
}