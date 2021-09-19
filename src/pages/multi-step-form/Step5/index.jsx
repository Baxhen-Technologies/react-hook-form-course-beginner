import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

import Form from "../../../components/react-hook-form/native";
import Button from "../../../components/button";
import { MaterialInput } from "../../../components/react-hook-form/material-ui/input";
import {
  clearRegisterForm,
  updateRegisterForm,
} from "../../../store/forms/actions";

function Step5({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    dispatch(clearRegisterForm());
    history.push("/multi-steps/result");
  };

  const registerForm = useSelector((state) => state.form.registerForm);
  const defaultMedia = { xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Sua melhor e mais segura senha!"
      >
        <MaterialInput
          {...defaultMedia}
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
          {...defaultMedia}
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

        <Button
          {...defaultMedia}
          className="full_width"
          onClick={() => history.push("/multi-steps/step4")}
          label="Anterior"
        />
        <Button
          {...defaultMedia}
          className="full_width"
          type="submit"
          label="Próximo"
        />
      </Form>
    </div>
  );
}

export default Step5;
