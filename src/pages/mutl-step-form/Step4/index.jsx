import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../../components/react-hook-form/form';
import Button from '../../../components/button';
import { MaterialInput } from '../../../components/react-hook-form/material-ui/input';
import { updateRegisterForm } from '../../../store/forms/actions';
import { emailRegex } from '../../../utils';

function Step4({ history }) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateRegisterForm(data));
    history.push('/step5');
  };

  const registerForm = useSelector((state) => state.form.registerForm);

  return (
    <div className="container">
      <Form
        onSubmit={onSubmit}
        defaultValues={registerForm}
        title="Qual é o seu melhor email?"
      >
        <MaterialInput
          name="email"
          label="Email"
          rules={{
            required: 'Campo Obrigatório',
            pattern: { value: emailRegex, message: 'Email inválido' },
          }}
        />

        <Button onClick={() => history.push('/step3')} label="Anterior" />
        <Button type="submit" label="Próximo" />
      </Form>
    </div>
  );
}

export default Step4;
//         <MaterialInput
//           name="senha"
//           label="Senha"
//           type="password"
//           rules={{
//             required: 'Campo Obrigatório',
//             // minLength: {
//             //   value: 8,
//             //   message: 'Senha deve ter pelo menos 8 dígitos',
//             // },
//           }}
//         />
//         <MaterialInput
//           name="senha_confirmacao"
//           label="Confirmação de Senha"
//           type="password"
//           rules={{
//             required: 'Campo Obrigatório',
//             validate: (value, { senha }) => {
//               return value === senha || 'Senha não confere';
//             },
//           }}
//         />

//         <MaterialSelect
//           name="sexo"
//           label="Sexo"
//           options={[
//             { value: 'masculino', label: 'Masculino' },
//             { value: 'feminino', label: 'Feminino' },
//           ]}
//           rules={{
//             required: 'Campo Obrigatório',
//           }}
//         />
//         <MaterialRadioButtonGroup
//           name="sexo_2"
//           label="Sexo"
//           row
//           options={[
//             { value: 'masculino', label: 'Masculino' },
//             { value: 'feminino', label: 'Feminino' },
//           ]}
//           rules={{
//             required: 'Campo Obrigatório',
//           }}
//         />