import styles from './Menu.scss';
import FilterBox from '../FilterBox/FilterBox';

const Menu = ({
  departmentsData,
  filterOneBoxClicked,
  categoriesData,
  filterTwoBoxClicked,
  handleHeaderClicked
}) => (
  <div styleName="main-container">
    <div role="presentation" onClick={handleHeaderClicked} styleName="header">
      All products
    </div>

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
