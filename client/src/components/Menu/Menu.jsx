import styles from './Menu.scss';
import FilterBox from '../FilterBox/FilterBox';
import Link from '../../components/Link/Link';

const Menu = ({ departmentsData, filterOneBoxClicked, categoriesData, filterTwoBoxClicked }) => (
  <div styleName="main-container">
    <Link to="/products" styleName="header">
      Products
    </Link>

    <section styleName="filter-container">
      <FilterBox
        handleClick={filterOneBoxClicked}
        heading="Department"
        filterData={departmentsData}
      />
      {categoriesData.length > 0 && (
        <FilterBox
          handleClick={filterTwoBoxClicked}
          heading="Category"
          filterData={categoriesData}
        />
      )}
    </section>
    <div />
  </div>
);

export default CSSModules(Menu, styles, { allowMultiple: true });
