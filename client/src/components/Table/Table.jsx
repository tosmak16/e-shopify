import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './Table.scss';

const Table = props => {
  const { tableData, updateCart, handleRemoveItem } = props;
  const [quantityValue, setQuantityValue] = useState({});

  const handleChange = ({ target: { value, name } }) => {
    setQuantityValue({ ...quantityValue, [name]: value });
  };

  const handleOnBlur = (itemId, quantity) => updateCart(quantity, itemId);
  return (
    <table className="table table-bordered ">
      <thead>
        <tr>
          <th scope="col" />
          <th scope="col">Name</th>
          <th scope="col">Attributes</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">SubTotal</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={item.item_id}>
            <th styleName="table-container" scope="row">
              <img
                styleName="table-image"
                src={require(`../../assets/images/${item.image}`)}
                alt="products"
              />
            </th>
            <td>{item.name}</td>
            <td>{item.attributes}</td>
            <td>{item.price}</td>
            <td>
              <input
                styleName="quantity"
                onChange={handleChange}
                onBlur={() => handleOnBlur(item.item_id, quantityValue[index])}
                value={quantityValue[index] || item.quantity}
                type="number"
                name={index}
                min="1"
              />
            </td>
            <td>{item.subtotal}</td>
            <td>
              <button
                onClick={() => handleRemoveItem(item.item_id)}
                type="button"
                className="btn btn-danger"
                styleName="btn"
              >
                <i className="fa fa-trash" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {};

export default CSSModules(Table, styles);
