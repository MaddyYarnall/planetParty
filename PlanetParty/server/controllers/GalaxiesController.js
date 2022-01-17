import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const galaxy = await galaxiesService.getById(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const galaxy = await galaxiesService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

}