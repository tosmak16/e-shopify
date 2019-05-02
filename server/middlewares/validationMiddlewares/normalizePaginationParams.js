import { isUndefined } from 'lodash';

const normalizePaginationParams = (req, res, next) => {
  const { page, limit, description_length } = req.query;
  const defaultPage = 0;
  const defaultLimit = 20;

  const normalizedOffset = !isUndefined(page) && page.match(/[0-9]$/) ? Number(page) : defaultPage;
  const normalizedLimit =
    !isUndefined(limit) && limit.match(/[0-9]$/) ? Number(limit) : defaultLimit;
  const descriptionLength =
    !isUndefined(description_length) && description_length.match(/[0-9]$/)
      ? description_length
      : 200;

  req.normalizePaginationParams = {
    offset: normalizedOffset,
    limit: normalizedLimit,
    descriptionLength
  };
  next();
};

export default normalizePaginationParams;
