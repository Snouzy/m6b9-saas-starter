import crypto from "crypto";

import { PASSWORD_REGEX } from "@/constants/regexs";

export const validatePassword = (password: string) => {
  return PASSWORD_REGEX.test(password);
};

export const hashStringWithSalt = (string: string, salt: string) => {
  const hash = crypto.createHash("sha256");

  const saltedString = salt + string;

  hash.update(saltedString);

  const hashedString = hash.digest("hex");

  return hashedString;
};
