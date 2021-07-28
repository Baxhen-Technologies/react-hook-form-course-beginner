import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../../components/react-hook-form/form';
import Button from '../../../components/button';
import { MaterialInput } from '../../../components/react-hook-form/material-ui/input';
import { updateRegisterForm } from '../../../store/forms/actions';

function Step5({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    history.push('/result');
  };

  const registerForm = useSelector((state) => state.form.registerForm);

  return (
    <div className="container">
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Sua melhor e mais segura senha!"
      >
        <MaterialInput
          name="senha"
          label="Senha"
          type="password"
          rules={{
            required: 'Campo Obrigatório',
            minLength: {
              value: 8,
              message: 'Senha deve ter pelo menos 8 dígitos',
            },
          }}
        />
        <MaterialInput
          name="senha_confirmacao"
          label="Confirmação de Senha"
          type="password"
          rules={{
            required: 'Campo Obrigatório',
            validate: (value, { senha }) => {
              return value === senha || 'Senha não confere';
            },
          }}
        />

        <Button onClick={() => history.push('/step4')} label="Anterior" />
        <Button type="submit" label="Próximo" />
      </Form>
    </div>
  );
}

export default Step5;
