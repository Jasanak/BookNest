export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validatePhone = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone.replace(/\s/g, ""));
};

export const validateISBN = (isbn) => {
  const cleanISBN = isbn.replace(/[-\s]/g, "");
  return cleanISBN.length === 10 || cleanISBN.length === 13;
};
