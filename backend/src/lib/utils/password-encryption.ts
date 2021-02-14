import bcrypt from "bcrypt";

const SALT_COUNT = 10;

export const encryptPassword = async (password: string) => {
  const encryptedPassword = await bcrypt.hash(password, SALT_COUNT);
  return encryptedPassword;
};

export const decryptPassword = async (plainText: string, encrypted: string) => {
  const decryptedPassword = await bcrypt.compare(plainText, encrypted);
  return decryptedPassword;
};
