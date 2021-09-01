import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../../components/react-hook-form/native';
import Button from '../../../components/button';
import { intInputTransform } from '../../../utils';
import { MaterialInput } from '../../../components/react-hook-form/material-ui/input';
import { updateRegisterForm } from '../../../store/forms/actions';

function Step1({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    history.push('/multi-steps/step2');
  };

  const registerForm = useSelector((state) => state.form.registerForm);
  return (
    <div className="container">
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Qual o seu nome?"
      >
        <MaterialInput
          name="nome"
          label="Nome"
          rules={{ required: 'Campo Obrigatório' }}
        />
        <MaterialInput
          name="idade"
          label="Idade"
          rules={{ required: 'Campo Obrigatório' }}
          type="number"
          transform={intInputTransform}
        />

        <Button type="submit" label="Próximo" />
      </Form>
    </div>
  );
}

export default Step1;
