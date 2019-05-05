export default (where = {}, defaults = {}, attributesToExcludeList = []) => ({
  where,
  defaults,
  attributes: { exclude: attributesToExcludeList }
});
