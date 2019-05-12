import styles from './SearchBar.scss';
import { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const handleChange = ({ target: { value } }) => setSearchInputValue(value);

  const handleSearchClicked = () => {
    if (searchInputValue.length > 0) {
      handleSearch(searchInputValue);
    }
  };

  const handleSearchOnEnterClicked = ({ keyCode }) => {
    if (searchInputValue.length > 0 && keyCode === 13) {
      handleSearch(searchInputValue);
    }
  };

  return (
    <div className="input-group">
      <input
        onKeyDown={handleSearchOnEnterClicked}
        onChange={handleChange}
        name="searchInput"
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchInputValue}
      />
      <div className="input-group-append">
        <button onClick={handleSearchClicked} className="btn btn-secondary" type="button">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
};

export default CSSModules(SearchBar, styles);
