export const validateEmail = (email: string) : boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email.toLowerCase());
};

export const getVerifyingDigit = (cnpj: string) => {
  const $ = (digit: number, value: number) => {
    return Number(cnpj[digit]) * value;
  };

  const multiplyA =
    $(11, 9) +
    $(10, 8) +
    $(9, 7) +
    $(8, 6) +
    $(7, 5) +
    $(6, 4) +
    $(5, 3) +
    $(4, 2) +
    $(3, 9) +
    $(2, 8) +
    $(1, 7) +
    $(0, 6);

  let resultA = multiplyA % 11;
  if (resultA >= 10) resultA = 0;

  const multiplyB =
    (resultA * 9) +
    $(11, 8) +
    $(10, 7) +
    $(9, 6) +
    $(8, 5) +
    $(7, 4) +
    $(6, 3) +
    $(5, 2) +
    $(4, 9) +
    $(3, 8) +
    $(2, 7) +
    $(1, 6) +
    $(0, 5);

  let resultB = multiplyB % 11;
  if (resultB >= 10) resultB = 0;

  return `${resultA}${resultB}`;
};

export const validateCNPJ = (text: string) : boolean => {
  const cnpj = text.replace(/[^\d]+/g, '');

  if (cnpj === '') return false;

  if (cnpj.length !== 14) return false;

  if (cnpj === '00000000000000' ||
  cnpj === '11111111111111' ||
  cnpj === '22222222222222' ||
  cnpj === '33333333333333' ||
  cnpj === '44444444444444' ||
  cnpj === '55555555555555' ||
  cnpj === '66666666666666' ||
  cnpj === '77777777777777' ||
  cnpj === '88888888888888' ||
  cnpj === '99999999999999') {
    return false;
  };

  const digits = getVerifyingDigit(cnpj);

  if (digits !== cnpj.slice(12, 14)) {
    return false;
  }

  return true;
};
