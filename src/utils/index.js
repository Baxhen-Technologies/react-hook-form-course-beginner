/* eslint-disable */
export const emailRegex = new RegExp(
  /(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
);
/* eslint-enable */
export const validatePlus = (v, validate, getValues) => {
  return validate(v, getValues());
};

export const customFunctionValidate = (rules, getValues) => {
  if (rules?.validate) {
    if (typeof rules.validate === "function") {
      return (value) => validatePlus(value, rules.validate, getValues);
    }
    const keys = Object.keys(rules.validate);

    const validate = {};

    keys.forEach((key) => {
      validate[key] = (value) =>
        validatePlus(value, rules.validate[key], getValues);
    });

    return validate;
  }
};

export const intInputTransform = {
  input: (value) => {
    return isNaN(value) || value === 0 ? "" : value.toString();
  },
  output: (e, onChange) => {
    const dotComma = new RegExp(/[,.]/);
    const value = Number(e.target.value);

    if (isNaN(value) || dotComma.test(e.target.value)) {
      return;
    }
    const output = parseInt(e.target.value, 10);
    const v = isNaN(output) ? "" : output;

    onChange(v);
  },
};
const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
export const moneyInputTransform = {
  input: (value) => {
    if (isNaN(value) || !value) return "";

    const v = moneyFormatter.format(value);

    return v;
  },
  output: (e, onChange) => {
    let value = e.target.value;

    if (value.includes("R$ ")) {
      const stringNumberNoDot = value
        .split("R$ ")[1]
        .replace(",", "")
        .replaceAll(".", "");

      if (isNaN(Number(stringNumberNoDot)) || stringNumberNoDot.includes("e"))
        return;

      const stringNumberWithDot = `${stringNumberNoDot.substring(
        0,
        stringNumberNoDot.length - 2
      )}.${stringNumberNoDot.substring(
        stringNumberNoDot.length - 2,
        stringNumberNoDot.length
      )}`;

      const v = Number(stringNumberWithDot);
      onChange(v);

      return;
    }
    if (isNaN(Number(value)) || value.includes("e")) return;
    onChange(value);
  },
};
