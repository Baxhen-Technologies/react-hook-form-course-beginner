import "./styles.css";
import Form from "../../components/react-hook-form/native";
import { Input } from "../../components/react-hook-form/native/input";
import Button from "../../components/button";
import { emailRegex } from "../../utils";
import Link from "../../components/link";
import DivSpace from "../../components/react-hook-form/div-space";

function NativeForm() {
  const onSubmit = (data) => console.log(data);

  const breakPoints = { xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
  return (
    <div className="register__container">
      <Form onSubmit={onSubmit} title="Cadastro">
        <Input
          {...breakPoints}
          name="nome"
          label="Nome"
          rules={{ required: "Campo Obrigatório" }}
        />
        <Input
          {...breakPoints}
          name="email"
          label="Email"
          rules={{
            required: "Campo Obrigatório",
            pattern: { value: emailRegex, message: "Email inválido" },
          }}
        />
        <Input
          {...breakPoints}
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
        <Input
          {...breakPoints}
          name="senha_confirmacao"
          label="Confirmação de Senha"
          type="password"
          rules={{
            required: "Campo Obrigatório",
            validate: (value, { senha }) => {
              return value === senha || "Senha não confere";
            },
          }}
        />
        <DivSpace {...breakPoints} className="register__forgot_password_link">
          <Link href="#">Esqueceu a senha?</Link>
        </DivSpace>
        <DivSpace {...breakPoints} className="register__submit_btn">
          <Button
            {...breakPoints}
            className="register__submit_btn"
            type="submit"
            label="Submit"
          />
        </DivSpace>
      </Form>
    </div>
  );
}

export default NativeForm;
