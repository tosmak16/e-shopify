import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import styles from './ProfilePage.scss';
import NameInput from '../../components/NameInput/NameInput';
import ZipCodeInput from '../../components/ZipCodeInput/ZipCodeInput';
import { getShippingRegions, getShippingRegionsWithCost, updateAddress } from '../../actions';
import Button from '../../components/Button/Button';

const ProfilePage = props => {
  const [profile, setProfile] = useState({
    name: { value: '', error: '' },
    address: { value: '', error: '' },
    region: { value: '', error: '' },
    city: { value: '', error: '' },
    country: { value: '', error: '' },
    zipCode: { value: '', error: '' },
    shippingRegion: '',
    shippingType: ''
  });

  const {
    customerProfile,
    shippingRegionData,
    getShippingRegions,
    shippingRegionsWithCostData,
    getShippingRegionsWithCost,
    updateAddress,
    accessToken
  } = props;

  const { shippingRegion, shippingType, name, address, region, city, country, zipCode } = profile;

  const handleShippingRegionChanged = ({ target: { value } }) => {
    setProfile({ ...profile, shippingRegion: value });
    getShippingRegionsWithCost(value);
  };

  const handleUpdateProfile = () =>
    updateAddress(
      {
        shipping_region_id: shippingRegion,
        name: name.value,
        address_1: address.value,
        postal_code: zipCode.value,
        region: region.value,
        country: country.value,
        city: city.value
      },
      accessToken
    );

  useEffect(() => {
    setProfile({
      ...profile,
      name: { value: customerProfile.name || '', error: '' },
      address: { value: customerProfile.address_1 || '', error: '' },
      region: { value: customerProfile.region || '', error: '' },
      city: { value: customerProfile.city || '', error: '' },
      country: { value: customerProfile.country || '', error: '' },
      zipCode: { value: customerProfile.postal_code || '', error: '' },
      shippingRegion: customerProfile.shipping_region_id
    });
  }, [customerProfile]);

  useEffect(() => {
    if (shippingRegionData.length === 0) {
      getShippingRegions();
    }

    if (shippingRegionData.length !== 0) {
      getShippingRegionsWithCost(customerProfile.shipping_region_id);
    }
  }, [shippingRegionData]);
  return (
    <div styleName="main-container">
      <div styleName="form-content">
        <div styleName="input-container">
          <NameInput
            name="name"
            id="name"
            placeholder="Name"
            updatedName={profile.name}
            label="Name"
            onChange={data => setProfile({ ...profile, name: data })}
          />
        </div>
        <div styleName="input-container">
          <NameInput
            name="address"
            id="address"
            placeholder="Address"
            updatedName={address}
            label="Address"
            onChange={data => setProfile({ ...profile, address: data })}
          />
        </div>
        <div styleName="input-container">
          <NameInput
            name="city"
            id="city"
            placeholder="City"
            label="City"
            updatedName={city}
            onChange={data => setProfile({ ...profile, city: data })}
          />
        </div>
        <div styleName="input-container">
          <NameInput
            name="region"
            id="region"
            placeholder="Region"
            updatedName={region}
            label="Region"
            onChange={data => setProfile({ ...profile, region: data })}
          />
        </div>
        <div styleName="input-container">
          <NameInput
            name="country"
            id="country"
            placeholder="Country"
            updatedName={country}
            label="Country"
            onChange={data => setProfile({ ...profile, country: data })}
          />
        </div>
        <div styleName="input-container">
          <ZipCodeInput
            name="zipCode"
            id="zipCode"
            placeholder="Zip Code"
            updatedZipCode={zipCode}
            label="Zip Code"
            onChange={data => setProfile({ ...profile, zipCode: data })}
          />
        </div>
        <div styleName="select-container" onChange={handleShippingRegionChanged}>
          <div>Shipping Region</div>
          {shippingRegionData.length > 0 && (
            <select name="shippingRegion" defaultValue={shippingRegion} styleName="dropdown">
              {shippingRegionData.map(item => (
                <option key={item.shipping_region_id} value={item.shipping_region_id}>
                  {item.shipping_region}
                </option>
              ))}
            </select>
          )}
        </div>
        {shippingRegionsWithCostData.length > 0 && (
          <div styleName="select-container">
            <div>Shipping Type</div>
            <select
              name="shippingType"
              onChange={({ target: { value } }) => setProfile({ ...profile, shippingType: value })}
              defaultValue={shippingType}
              styleName="dropdown"
            >
              {shippingRegionsWithCostData.map(item => (
                <option key={item.shipping_id} value={item.shipping_id}>
                  {item.shipping_type}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div styleName="button-container">
        <Button onClick={handleUpdateProfile}>Save</Button>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {};

const mapStateToProps = state => ({
  customerProfile: state.customer.data.customer,
  shippingRegionData: state.shippingRegion.shippingRegions,
  shippingRegionsWithCostData: state.shippingRegion.shippingRegionsWithCost,
  accessToken: state.customer.data.accessToken
});

export default withRouter(
  connect(
    mapStateToProps,
    { getShippingRegionsWithCost, getShippingRegions, updateAddress }
  )(CSSModules(ProfilePage, styles))
);
