import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import styles from './ImageSlider.scss';

import imageSub from '../../assets/images/adoration-of-the-kings-thumbnail.gif';
import image2Sub from '../../assets/images/adoration-of-the-kings-2.gif';
import thumbnailSub from '../../assets/images/afghan-flower-thumbnail.gif';

const ImageSlider = ({ productData: { image, image_2, thumbnail } }) => {
  return (
    <div styleName="image-slider">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src={image ? require(`../../assets/images/${image}`) : imageSub} alt="legend" />
        </div>
        <div>
          <img src={image_2 ? require(`../../assets/images/${image_2}`) : image2Sub} alt="legend" />
        </div>
        <div>
          <img
            src={thumbnail ? require(`../../assets/images/${thumbnail}`) : thumbnailSub}
            alt="legend"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CSSModules(ImageSlider, styles);
