import handleFetchProducts from '../../utils/handleFetchProducts';

const getProducts = async (req, res) => {
  const { offset, limit, descriptionLength } = req.normalizePaginationParams;

  const products = await handleFetchProducts({ offset, limit }, descriptionLength);

  return res.status(200).send(products);
};

export default getProducts;
