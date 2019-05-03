export default id => ({
  where: { department_id: id },
  attributes: ['category_id']
});
