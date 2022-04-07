export function validateFormAddProperty(data) {
  let errors = {
    name: "Enter property name, example 'Mar del Plata beach house'",
    location: "Enter location",
    price: "Enter price per stay",
    image: "Enter images",
    services: "Enter services, example 'WIFI,TV,...' ",
    description: "Enter description",
    typePropertyID: "Enter type property",
    coordinates: "Enter the approximate location on the map",
  }

  for (const property in data) {
    if (typeof data[property] === "string" && data[property] !== "") {
      errors[property] = ""
    } else if (Array.isArray(data[property]) && data[property].length > 0) {
      errors[property] = ""
    } else if (typeof data[property] === "number" && data[property] >= 0) {
      errors[property] = ""
    }
  }

  return errors
}
