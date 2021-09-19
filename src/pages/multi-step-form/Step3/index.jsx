import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

import Form from "../../../components/react-hook-form/native";
import Button from "../../../components/button";
import { updateRegisterForm } from "../../../store/forms/actions";
import { MaterialRadioButtonGroup } from "../../../components/react-hook-form/material-ui/radio-button-group";
import DivSpace from "../../../components/react-hook-form/div-space";

function Step3({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    history.push("/multi-steps/step4");
  };

  const registerForm = useSelector((state) => state.form.registerForm);

  const defaultMedia = { xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };

  return (
    <div className="container">
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Qual o seu sexo?"
      >
        <MaterialRadioButtonGroup
          {...defaultMedia}
          name="sexo"
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
        <DivSpace {...defaultMedia} />
        <Button
          {...defaultMedia}
          className="full_width"
          onClick={() => history.push("/multi-steps/step2")}
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

export default Step3;
