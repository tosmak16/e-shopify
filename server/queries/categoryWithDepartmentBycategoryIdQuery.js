import { Department } from '../db';

export default (arrayOfAttributesTobeExcluded = []) => ({
  attributes: { exclude: arrayOfAttributesTobeExcluded },
  include: [
    {
      model: Department,
      required: true,
      attributes: ['name']
    }
  ]
});
