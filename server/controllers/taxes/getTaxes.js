import TaxService from '../../services/database/TaxService';

const getTaxes = async (req, res) => {
  const taxes = await TaxService.findAllBy();

  if (taxes.length === 0) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'TAX_02',
        message: 'Taxes does not exist',
        field: 'NoTaxes'
      }
    });
  }

  return res.status(200).send(taxes);
};

export default getTaxes;
