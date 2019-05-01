export default customerData => ({
  customer_id: customerData.get('customer_id') || null,
  name: customerData.get('name') || null,
  email: customerData.get('email') || null,
  address_1: customerData.get('address_1') || null,
  address_2: customerData.get('address_2') || null,
  city: customerData.get('city') || null,
  region: customerData.get('region') || null,
  postal_code: customerData.get('postal_code') || null,
  country: customerData.get('country') || null,
  shipping_region_id: customerData.get('shipping_region_id') || 1,
  day_phone: customerData.get('day_phone') || null,
  eve_phone: customerData.get('eve_phone') || null,
  mob_phone: customerData.get('mob_phone') || null,
  credit_card: customerData.get('credit_card') || null || null
});
