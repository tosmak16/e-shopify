import { Review } from '../../db';

class ReviewsService {
  static async findBy(modelData = {}) {
    const result = await Review.findAll(modelData);
    return result;
  }

  static async findById(id) {
    const result = await Review.findByPk(id);
    return result;
  }

  static async findOneBy(modelData) {
    const result = await Review.findOne(modelData);
    return result;
  }
}

export default ReviewsService;
