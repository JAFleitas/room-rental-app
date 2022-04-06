function includeServices(propertyServices, servicesArray) {
  if (propertyServices.length === 0) {
    return false
  }
  const arrayPropertyServices = propertyServices.map(element => element.id)
  for (let i = 0; i < servicesArray.length; i++) {
    if (!arrayPropertyServices.includes(servicesArray[i])) {
      return false
    }
  }

  return true
}

const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
const arraydos = [1, 2, 3]
includeServices(array, arraydos)

module.exports = { includeServices }
