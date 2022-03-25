export function validateFormAddProperty(data) {
  let errors = {
    name: "Enter property name, example 'Mar del Plata beach house'",
    location: "Enter location",
    price: "Enter price per stay",
    maxNumberOfPeople: "Enter maximum number of people",
    numberOfRooms: "Enter number of rooms",
    image: "Enter images",
    services: "Enter services, example 'WIFI,TV,...' ",
    description: "Enter description",
    floor: "Enter number of floor",
    discount: "Enter discount if any",
    typePropertyID: "Enter type property",
    coordinates:
      "Enter the approximate location on the map to get the coordinates",
  }

  for (const property in data) {
    if (data[property].length > 0) {
      errors[property] = ""
    }
  }

  return errors
}
