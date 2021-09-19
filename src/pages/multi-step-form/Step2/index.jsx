import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

import Form from "../../../components/react-hook-form/native";
import Button from "../../../components/button";
import { moneyInputTransform } from "../../../utils";
import { MaterialInput } from "../../../components/react-hook-form/material-ui/input";
import { updateRegisterForm } from "../../../store/forms/actions";
import DivSpace from "../../../components/react-hook-form/div-space";

function Step2({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    history.push("/multi-steps/step3");
  };

  const registerForm = useSelector((state) => state.form.registerForm);
  const defaultMedia = { xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };

  return (
    <div className="container">
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Qual o seu patrimônio?"
      >
        <MaterialInput
          {...defaultMedia}
          name="patrimonio"
          label="Patrimônio"
          rules={{ required: "Campo Obrigatório" }}
          transform={moneyInputTransform}
        />

        <DivSpace {...defaultMedia} />

        <Button
          {...defaultMedia}
          className="full_width"
          onClick={() => history.push("/multi-steps")}
          label="Anterior"
        />
        <Button
          className="full_width"
          {...defaultMedia}
          type="submit"
          label="Próximo"
        />
      </Form>
    </div>
  );
}

export default Step2;
