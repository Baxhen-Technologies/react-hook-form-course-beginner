import Form from "../../components/react-hook-form/material-ui";
import Button from "../../components/button";
import {
  emailRegex,
  intInputTransform,
  moneyInputTransform,
} from "../../utils";
import Link from "../../components/link";
import { MaterialInput } from "../../components/react-hook-form/material-ui/input";
import { MaterialSelect } from "../../components/react-hook-form/material-ui/select";
import { MaterialRadioButtonGroup } from "../../components/react-hook-form/material-ui/radio-button-group";
import DivSpace from "../../components/react-hook-form/div-space";
import { useMediaQuery, useTheme } from "@material-ui/core";
import useStyles from "./styles";

function MaterialForm() {
  const theme = useTheme();
  const classes = useStyles();

  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultMedia = { xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };

  const onSubmit = (data) => console.log(data);

  const fields = [
    {
      ...defaultMedia,
      Component: MaterialInput,
      name: "nome",
      label: "Nome",
      rules: { required: "Campo Obrigatório" },
    },
    {
      ...defaultMedia,
      Component: MaterialInput,
      name: "idade",
      label: "Idade",
      rules: { required: "Campo Obrigatório" },
      transform: intInputTransform,
    },
    {
      ...defaultMedia,
      Component: MaterialInput,
      name: "patrimonio",
      label: "Patrimônio",
      rules: { required: "Campo Obrigatório" },
      transform: moneyInputTransform,
    },
    {
      ...defaultMedia,
      Component: MaterialInput,
      name: "email",
      label: "Email",
      rules: {
        required: "Campo Obrigatório",
        pattern: { value: emailRegex, message: "Email inválido" },
      },
    },
    {
      ...defaultMedia,
      Component: MaterialInput,
      name: "senha",
      label: "Senha",
      rules: {
        required: "Campo Obrigatório",
        minLength: {
          value: 8,
          message: "Senha deve ter pelo menos 8 dígitos",
        },
      },
      type: "password",
    },
    {
      ...defaultMedia,
      Component: MaterialInput,
      name: "senha_confirmacao",
      label: "Confirmação de Senha",
      rules: {
        required: "Campo Obrigatório",
        validate: {
          confirm: (value, { senha }) => {
            return value === senha || "Senha não confere";
          },
          too_short: (value) => {
            return value.length >= 8 || "Senha muito curta";
          },
        },
      },
      type: "password",
    },
    {
      ...defaultMedia,
      Component: MaterialSelect,
      name: "sexo",
      label: "Sexo",
      rules: {
        required: "Campo Obrigatório",
      },
      options: [
        { value: "masculino", label: "Masculino" },
        { value: "feminino", label: "Feminino" },
      ],
    },
    {
      ...defaultMedia,
      Component: MaterialRadioButtonGroup,
      name: "maioridade",
      label: "Maioridade",
      rules: {
        required: "Campo Obrigatório",
      },
      options: [
        { value: "+18", label: "Adulto" },
        { value: "-18", label: "Criança" },
      ],
      row: true,
    },
  ];
  return (
    <div className={classes.root}>
      <Form onSubmit={onSubmit} title="Cadastro">
        {fields.map(({ Component, ...field }) => (
          <Component key={field.name} {...field} />
        ))}

        <DivSpace className={classes.linkContainer} md={3} sm={6} xs={12}>
          <Link href="#">Esqueceu a senha?</Link>
        </DivSpace>
        <DivSpace md={9} hidden={downSm} />
        <DivSpace md={6} hidden={downSm} />
        <DivSpace md={6} sm={6} xs={12}>
          <Button type="submit" label="Submit" style={{ width: "100%" }} />
        </DivSpace>
      </Form>
    </div>
  );
}

export default MaterialForm;
