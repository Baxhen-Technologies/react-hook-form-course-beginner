import './styles.css';
import Form from '../../components/react-hook-form/form';
import Button from '../../components/button';
import {
  emailRegex,
  intInputTransform,
  moneyInputTransform,
} from '../../utils';
import Link from '../../components/link';
import { MaterialInput } from '../../components/react-hook-form/material-ui/input';
import { MaterialSelect } from '../../components/react-hook-form/material-ui/select';
import { MaterialRadioButtonGroup } from '../../components/react-hook-form/material-ui/radio-button-group';

function MaterialForm() {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <Form onSubmit={onSubmit} title="Cadastro">
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
        <MaterialInput
          name="patrimonio"
          label="Património"
          rules={{ required: 'Campo Obrigatório' }}
          transform={moneyInputTransform}
        />
        <MaterialInput
          name="email"
          label="Email"
          rules={{
            required: 'Campo Obrigatório',
            pattern: { value: emailRegex, message: 'Email inválido' },
          }}
        />
        <MaterialInput
          name="senha"
          label="Senha"
          type="password"
          rules={{
            required: 'Campo Obrigatório',
            // minLength: {
            //   value: 8,
            //   message: 'Senha deve ter pelo menos 8 dígitos',
            // },
          }}
        />
        <MaterialInput
          name="senha_confirmacao"
          label="Confirmação de Senha"
          type="password"
          rules={{
            required: 'Campo Obrigatório',
            validate: {
              confirm: (value, { senha }) => {
                return value === senha || 'Senha não confere';
              },
              too_short: (value) => {
                return value.length > 8 || 'Senha muito curta';
              },
            },
          }}
        />

        <MaterialSelect
          name="sexo"
          label="Sexo"
          options={[
            { value: 'masculino', label: 'Masculino' },
            { value: 'feminino', label: 'Feminino' },
          ]}
          rules={{
            required: 'Campo Obrigatório',
          }}
        />
        <MaterialRadioButtonGroup
          name="sexo_2"
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

        <Link href="#">Esqueceu a senha?</Link>

        <Button type="submit" label="Submit" />
      </Form>
    </div>
  );
}

export default MaterialForm;
