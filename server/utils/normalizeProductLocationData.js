export default productLocationData => {
  const { category_id, department_id, name, Department } = productLocationData;

  return [
    {
      category_id,
      category_name: name,
      department_id,
      department_name: Department.name
    }
  ];
};
