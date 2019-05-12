import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './ShopPage.scss';
import SideBar from '../../components/SideBar/SideBar';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';

import {
  getProducts,
  searchProducts,
  getDepartments,
  getCategoryInDepartment,
  getProductsInDepartment,
  getProductsInCategory
} from '../../actions';

const ShopPage = props => {
  const [productsList, setProductsList] = useState([]);
  const [departmentsList, setDepartmentsList] = useState([]);
  const [actionTracker, setActionTracker] = useState([{ funcToBeCalled: null, params: null }]);

  const {
    getProducts,
    productsData,
    searchProducts,
    departmentsData,
    getDepartments,
    getCategoryInDepartment,
    getProductsInDepartment,
    getProductsInCategory,
    categoriesData
  } = props;

  const handlePageClick = (limit, page) => {
    const { funcToBeCalled, params } = actionTracker[0];
    return params === null ? funcToBeCalled(limit, page) : funcToBeCalled(params, limit, page);
  };

  const handleSearchProduct = productName => {
    searchProducts(productName);
    setActionTracker([{ funcToBeCalled: searchProducts, params: productName }]);
  };

  const handleGetCategoryIndepartment = departmentIndex => {
    const departmentId = departmentsList[departmentIndex].department_id;
    getCategoryInDepartment(departmentId);
    getProductsInDepartment(departmentId);
    setActionTracker([{ funcToBeCalled: getProductsInDepartment, params: departmentId }]);
  };

  const handleGetProductInCategory = categoryIndex => {
    const categoryId = categoriesData[categoryIndex].category_id;
    getProductsInCategory(categoryId);
    setActionTracker([{ funcToBeCalled: getProductsInCategory, params: categoryId }]);
  };

  useEffect(() => {
    if (productsList.length === 0) {
      getProducts();
      setActionTracker([{ funcToBeCalled: getProducts, params: null }]);
    }
    setProductsList(productsData.data);
  }, [productsData]);

  useEffect(() => {
    if (departmentsList.length === 0) {
      getDepartments();
    }
    setDepartmentsList(departmentsData);
  }, [departmentsData]);

  return (
    <div styleName="main-container">
      <Nav />
      <div styleName="sidebar-container">
        <SideBar />
      </div>
      <div styleName="menu-container">
        <Menu
          {...props}
          filterOneBoxClicked={handleGetCategoryIndepartment}
          filterTwoBoxClicked={handleGetProductInCategory}
          handleHeaderClicked={getProducts}
        />
      </div>
      <div styleName="main-content">
        <SearchBar handleSearch={handleSearchProduct} />
        <div styleName="card-container">
          {productsList.map(item => (
            <Card
              description={item.description}
              key={item.product_id}
              name={item.name}
              image={item.image}
              price={item.price}
              productId={item.product_id}
              thumbnail={item.thumbnail}
            />
          ))}
        </div>
        {productsList.length > 0 && (
          <Pagination
            handlePageClick={handlePageClick}
            totalRecords={productsData.count}
            pageLimit={20}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  productsData: state.products,
  departmentsData: state.departments.data,
  categoriesData: state.categories.data
});

export default connect(
  mapStateToProps,
  {
    getProducts,
    searchProducts,
    getDepartments,
    getCategoryInDepartment,
    getProductsInDepartment,
    getProductsInCategory
  }
)(CSSModules(ShopPage, styles));
