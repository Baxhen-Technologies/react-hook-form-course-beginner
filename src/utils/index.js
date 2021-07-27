export const emailRegex =
  /(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const validatePlus = (v, rules, getValues) => {
  return rules.validate(v, getValues());
};

export const customFunctionValidate = (rules, getValues) => {
  if (rules?.validate) {
    if (typeof rules.validate === 'function') {
      return (value) => validatePlus(value, rules, getValues);
    }
    return rules.validate;
  }
};

export const intInputTransform = {
  input: (value) => {
    //* deve sempre retornar string
    return isNaN(value) || value === 0 ? '' : value.toString();
  },
  output: (e, onChange) => {
    //* formatar para o numero inteiro
    const output = parseInt(e.target.value, 10);
    const v = isNaN(output) ? '' : output;

    onChange(v);
  },
};
export const moneyInputTransform = {
  input: (value) => {
    if (isNaN(value) || !value) return '';

    let v = value.toFixed(2);

    v = v.replace(/(\D)/, '');
    v = v.replace(/(\d)(\d{2})$/, '$1,$2');
    v = v.replace(/(?=(\d{3})+(\D))\B/g, '.');

    return v;
  },
  output: (e, onChange) => {
    //* formatar para o numero

    var reg = new RegExp(/^[0-9]*$/gm);

    let value = e.target.value;
    value = value.replaceAll('.', '');
    value = value.replaceAll(',', '');

    if (!reg.test(value)) return;

    if (value.length <= 2) {
      value = `0.${value}`;
    } else {
      value = value.replace(/(\d)(\d{2})$/, '$1.$2');
    }

    const output = Number(value);

    const v = isNaN(output) ? '' : output;

    onChange(v);
  },
};
