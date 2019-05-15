import styles from './Loader.scss';

const LoadingSpinner = () => (
  <React.Fragment>
    <div styleName="overlay">
      <div styleName="circle">
        <span styleName="ball" />
        <span styleName="ball" />
        <span styleName="ball" />
      </div>
    </div>
  </React.Fragment>
);

export default CSSModules(LoadingSpinner, styles);
