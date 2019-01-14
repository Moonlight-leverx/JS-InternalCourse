function begin() {
    var fern1 = new Fern('Staghorn Fern', 'Popular type of indoor ferns', 'Platycerium family',
        25, 'Indoor ferns', '15', 'Not dangerous', 'Asia', 'Food industry', 'Da Vinci');

    console.log(fern1);

    var string = JSON.stringify(fern1);

    parsedString = JSON.parse(string);

    console.log(string);
    console.log(parsedString);

}

function Plant(name, description, species, age, class_p,
    inflorescenceSize, hazardClass, habitat, application) {

    name = name;
    description = description;
    species = species;
    age = age;
    class_p = class_p;
    inflorescenceSize = inflorescenceSize;
    hazardClass = hazardClass;
    habitat = habitat;
    application = application;

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
    
    discoverer = discoverer;

    this.getDiscoverer = function () {
        return discoverer;
    }

    this.setDiscoverer = function (value) {
        this.discoverer = value;
    }

    this.toJSON = function () {
        
        var result = "".concat("{ 'Name':'", this.getName(), "', " +
            "'Description':'", this.getDescription(), "', " +
            "'Species':'", this.getSpecies(), "', " +
            "'Age':'", this.getAge(), "', " +
            "'Class':'", this.getClass_p(), "', " +
            "'Inflorescence Size':'", this.getInflorescenceSize(), "', " +
            "'Hazard Class':'", this.getHazardClass(), "', " +
            "'Habitat':'", this.getHabitat(), "', " +
            "'Application':'", this.getApplication(), "', " +
            "'Discoverer':'", this.getDiscoverer(), "'}");
        console.log(result);

        return result;
    }


}


function Spruce(name, description, species, age, class_p, inflorescenceSize,
    hazardClass, habitat, application, placeOfGrowth) {

    Plant.call(name, description, species, age, class_p, inflorescenceSize, hazardClass, habitat, application)
    
    this.placeOfGrowth = placeOfGrowth;

    this.getPlaceOfGrowth = function () {
        return placeOfGrowth;
    }

    this.setPlaceOfGrowth = function (value) {
        placeOfGrowth = value;
    }
}