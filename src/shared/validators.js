/* eslint-disable */

export const validateEmail = (email) => {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return emailRegex.test(email);
};

export const validateHRMUsername = (username) => {
  // this regex doesn't work
  const usernameRegex = new RegExp(/^[a-z]{2,}\.[a-z]{2,}$/);
  return usernameRegex.test(username);
};
