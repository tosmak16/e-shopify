import { isUndefined } from 'lodash';

const normalizePaginationParams = (req, res, next) => {
  const { page, limit, description_length, all_words, query_string, order } = req.query;
  const defaultPage = 0;
  const defaultLimit = 20;

  const normalizedOffset = !isUndefined(page) && page.match(/[0-9]$/) ? Number(page) : defaultPage;
  const normalizedLimit =
    !isUndefined(limit) && limit.match(/[0-9]$/) ? Number(limit) : defaultLimit;
  const descriptionLength =
    !isUndefined(description_length) && description_length.match(/[0-9]$/)
      ? description_length
      : 200;

  const queryString = isUndefined(query_string) ? '' : query_string;
  const allWords = isUndefined(all_words) ? 'on' : all_words;
  const normalizedOrder = order === 'name' || order === 'category_id' ? order : '';

  req.normalizePaginationParams = {
    offset: normalizedOffset,
    limit: normalizedLimit,
    descriptionLength,
    queryString,
    allWords,
    order: normalizedOrder
  };
  next();
};

export default normalizePaginationParams;
