export const validateUsername = (username: string) => {
  if (!username) return Error("Username can't be empty");
  if (username.length < 4) return Error("Username should be at least 4 char");

  return true;
};

export const validatePassword = (password: string) => {
  if (!password) return Error("Password can't be empty");
  if (password.length < 5) return Error("Password should be more than 4");

  return true;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (!confirmPassword) return Error("Confirm password cant'be empty");
  if (confirmPassword !== password) return Error("Password no match");

  return true;
};

export const validateUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};
