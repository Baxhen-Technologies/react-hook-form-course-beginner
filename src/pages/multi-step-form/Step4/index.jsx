import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

import Form from "../../../components/react-hook-form/native";
import Button from "../../../components/button";
import { MaterialInput } from "../../../components/react-hook-form/material-ui/input";
import { updateRegisterForm } from "../../../store/forms/actions";
import { emailRegex } from "../../../utils";
import DivSpace from "../../../components/react-hook-form/div-space";

function Step4({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    history.push("/multi-steps/step5");
  };

  const registerForm = useSelector((state) => state.form.registerForm);
  const defaultMedia = { xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
  return (
    <div className="container">
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Qual é o seu melhor email?"
      >
        <MaterialInput
          {...defaultMedia}
          name="email"
          label="Email"
          rules={{
            required: "Campo Obrigatório",
            pattern: { value: emailRegex, message: "Email inválido" },
          }}
        />
        <DivSpace {...defaultMedia} />
        <Button
          {...defaultMedia}
          className="full_width"
          onClick={() => history.push("/multi-steps/step3")}
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

export default Step4;
