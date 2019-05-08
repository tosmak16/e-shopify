export default async dbConnect => {
  await dbConnect.query(
    "INSERT INTO `product` (`product_id`, `name`, `description`, `price`, `discounted_price`, `image`, `image_2`, `thumbnail`, `display`) VALUES (1, 'Arc d''Triomphe', 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', 14.99, 0.00, 'arc-d-triomphe.gif', 'arc-d-triomphe-2.gif', 'arc-d-triomphe-thumbnail.gif', 0);"
  );

  await dbConnect.query(
    "INSERT INTO `department` (`department_id`, `name`, `description`) VALUES (1, 'Regional', 'Proud of your country? Wear a T-shirt with a national symbol stamp!');"
  );

  await dbConnect.query(
    "INSERT INTO `category` (`category_id`, `department_id`, `name`, `description`) VALUES (1, 1, 'French', 'The French have always had an eye for beauty. One look at the T-shirts below and you''ll see that same appreciation has been applied abundantly to their postage stamps. Below are some of our most beautiful and colorful T-shirts, so browse away! And don''t forget to go all the way to the bottom - you don''t want to miss any of them!');"
  );

  await dbConnect.query(
    'INSERT INTO `product_category` (`product_id`, `category_id`) VALUES (1, 1)'
  );

  await dbConnect.query(
    "INSERT INTO `attribute` (`attribute_id`, `name`) VALUES (1, 'Size'), (2, 'Color');"
  );

  await dbConnect.query(
    "INSERT INTO `attribute_value` (`attribute_value_id`, `attribute_id`, `value`) VALUES (1, 1, 'S'), (2, 1, 'M'), (3, 1, 'L'), (4, 1, 'XL'), (5, 1, 'XXL'), (6, 2, 'White'),  (7, 2, 'Black'), (8, 2, 'Red'), (9, 2, 'Orange');;"
  );

  await dbConnect.query(
    'INSERT INTO `product_attribute` (`product_id`, `attribute_value_id`) SELECT `p`.`product_id`, `av`.`attribute_value_id` FROM   `product` `p`, `attribute_value` `av`;'
  );

  await dbConnect.query(
    "INSERT INTO `tax` (`tax_id`, `tax_type`, `tax_percentage`) VALUES (1, 'Sales Tax at 8.5%', 8.50), (2, 'No Tax', 0.00);"
  );

  await dbConnect.query(
    "INSERT INTO `shipping_region` (`shipping_region_id`, `shipping_region`) VALUES(1, 'Please Select') , (2, 'US / Canada'), (3, 'Europe'),(4, 'Rest of World');"
  );

  await dbConnect.query(
    "INSERT INTO `shipping` (`shipping_id`,   `shipping_type`, `shipping_cost`, `shipping_region_id`) VALUES (1, 'Next Day Delivery ($20)', 20.00, 2), (2, '3-4 Days ($10)',10.00, 2), (3, '7 Days ($5)', 5.00, 2);"
  );
};
