import PropTypes from 'prop-types';

import styles from './Card.scss';
import Link from '../Link/Link';

const Card = ({ image, name, price, description, productId, thumbnail }) => {
  const productImage = image || thumbnail;
  return (
    <div styleName="card">
      <div styleName="card__side card__side--front">
        <img
          src={
            productImage
              ? require(`../../assets/images/${productImage}`)
              : 'https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg'
          }
          styleName="card__picture card__picture--1"
          alt="ss"
        />
        <h3 styleName="card__heading">
          <span styleName="card__heading-span card__heading-span--1">{name || 'title'}</span>
        </h3>
        <div styleName="card__details">
          <ul>
            <li>{name || 'name'}</li>
            <li>{`$${price || 'price'}`}</li>
          </ul>
        </div>
      </div>
      <div styleName="card__side card__side--back card__side--back-1">
        <div styleName="card__cta">
          <div styleName="card__size-box">
            <p styleName="card__size">{description || 'description'}</p>
          </div>
          <Link to={`/app/products/${productId}`} styleName="btn">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  image: '',
  description: '',
  price: '',
  name: '',
  productId: null,
  thumbnail: ''
};

Card.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  productId: PropTypes.number,
  thumbnail: PropTypes.string
};
export default CSSModules(Card, styles, { allowMultiple: true });
