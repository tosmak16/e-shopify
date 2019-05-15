import jwtDecode from 'jwt-decode';

const verifyToken = token => {
  const customerToken = token.slice(7, token.length);

  try {
    const decodedToken = jwtDecode(customerToken);
    const tokenExpDate = decodedToken.exp;
    const newDate = String(Date.now());
    return String(tokenExpDate) > newDate;
  } catch (error) {
    return false;
  }
};

export default verifyToken;
