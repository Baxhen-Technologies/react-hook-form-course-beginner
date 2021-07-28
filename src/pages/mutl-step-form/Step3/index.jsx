import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../../components/react-hook-form/form';
import Button from '../../../components/button';
import { updateRegisterForm } from '../../../store/forms/actions';
import { MaterialRadioButtonGroup } from '../../../components/react-hook-form/material-ui/radio-button-group';

function Step3({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    history.push('/step4');
  };

  const registerForm = useSelector((state) => state.form.registerForm);

  return (
    <div className="container">
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Qual o seu sexo?"
      >
        <MaterialRadioButtonGroup
          name="sexo"
          label="Sexo"
          row
          options={[
            { value: 'masculino', label: 'Masculino' },
            { value: 'feminino', label: 'Feminino' },
          ]}
          rules={{
            required: 'Campo Obrigatório',
          }}
        />

        <Button onClick={() => history.push('/step2')} label="Anterior" />
        <Button type="submit" label="Próximo" />
      </Form>
    </div>
  );
}

export default Step3;
