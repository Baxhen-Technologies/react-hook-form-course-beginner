import "./styles.css";
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
import DivSpace from "../../components/react-hook-form/material-ui/div-space";
import { useMediaQuery, useTheme } from "@material-ui/core";
import useStyles from "./styles";

function MaterialForm() {
  const theme = useTheme();
  const classes = useStyles();

  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultMedia = () => {
    return { md: 6, xs: 12 };
  };

  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <Form onSubmit={onSubmit} title="Cadastro">
        <MaterialInput
          {...defaultMedia()}
          name="nome"
          label="Nome"
          rules={{ required: "Campo Obrigatório" }}
        />
        <MaterialInput
          {...defaultMedia()}
          name="idade"
          label="Idade"
          rules={{ required: "Campo Obrigatório" }}
          type="number"
          transform={intInputTransform}
        />
        <MaterialInput
          {...defaultMedia()}
          name="patrimonio"
          label="Património"
          rules={{ required: "Campo Obrigatório" }}
          transform={moneyInputTransform}
        />
        <MaterialInput
          {...defaultMedia()}
          name="email"
          label="Email"
          rules={{
            required: "Campo Obrigatório",
            pattern: { value: emailRegex, message: "Email inválido" },
          }}
        />
        <MaterialInput
          {...defaultMedia()}
          name="senha"
          label="Senha"
          type="password"
          rules={{
            required: "Campo Obrigatório",
            minLength: {
              value: 8,
              message: "Senha deve ter pelo menos 8 dígitos",
            },
          }}
        />
        <MaterialInput
          {...defaultMedia()}
          name="senha_confirmacao"
          label="Confirmação de Senha"
          type="password"
          rules={{
            required: "Campo Obrigatório",
            validate: {
              confirm: (value, { senha }) => {
                return value === senha || "Senha não confere";
              },
              too_short: (value) => {
                return value.length >= 8 || "Senha muito curta";
              },
            },
          }}
        />

        <MaterialSelect
          {...defaultMedia()}
          name="sexo"
          label="Sexo"
          options={[
            { value: "masculino", label: "Masculino" },
            { value: "feminino", label: "Feminino" },
          ]}
          rules={{
            required: "Campo Obrigatório",
          }}
        />
        <MaterialRadioButtonGroup
          {...defaultMedia()}
          name="sexo_2"
          label="Sexo"
          row
          options={[
            { value: "masculino", label: "Masculino" },
            { value: "feminino", label: "Feminino" },
          ]}
          rules={{
            required: "Campo Obrigatório",
          }}
        />

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
