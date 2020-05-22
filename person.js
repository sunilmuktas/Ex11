function Person() {
};
Person.name = "";
Person.age = "";
Person.job = "";
Person.location = "";
Person.prototype.init = function (name, age, job, location) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.location = location;
}
Person.prototype.describe = function () {
  var description = "<==>Person Name is ";
  description += this.name;
  description += "  person age is ";
  description += String(this.age);
  description += " job is ";
  description += String(this.job);
  description += " and location  is ";
  description += String(this.location);
  return description;
}

Person.prototype.describeWithHoroscope = function () {
  var description = this.describe();
  description += " Prediction: " + getHoroscope(this.name, this.age);
  return description;
}