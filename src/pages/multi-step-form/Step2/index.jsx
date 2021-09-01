import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../../components/react-hook-form/native';
import Button from '../../../components/button';
import { moneyInputTransform } from '../../../utils';
import { MaterialInput } from '../../../components/react-hook-form/material-ui/input';
import { updateRegisterForm } from '../../../store/forms/actions';

function Step2({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    history.push('/multi-steps/step3');
  };

  const registerForm = useSelector((state) => state.form.registerForm);

  return (
    <div className="container">
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Qual o seu patrimônio?"
      >
        <MaterialInput
          name="patrimonio"
          label="Patrimônio"
          rules={{ required: 'Campo Obrigatório' }}
          transform={moneyInputTransform}
        />

        <Button onClick={() => history.push('/multi-steps')} label="Anterior" />
        <Button type="submit" label="Próximo" />
      </Form>
    </div>
  );
}

export default Step2;
