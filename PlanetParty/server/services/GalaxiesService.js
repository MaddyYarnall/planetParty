
import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GalaxiesService {

  async getAll(query = {}) {
    const galaxies = await dbContext.Galaxies.find(query).populate('name image')
    return galaxies
  }

  async getById(id) {
    const galaxy = await dbContext.Galaxies.findById(id).populate('name image')
    if (!galaxy) {
      throw new BadRequest('Invalid Galaxy ID')
    }
  }

}

export const galaxiesService = new GalaxiesService