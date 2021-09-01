import './styles.css';
import Form from '../../components/react-hook-form/native';
import { Input } from '../../components/react-hook-form/native/input';
import Button from '../../components/button';
import { emailRegex } from '../../utils';
import Link from '../../components/link';

function NativeForm() {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <Form onSubmit={onSubmit} title="Cadastro">
        <Input
          name="nome"
          label="Nome"
          rules={{ required: 'Campo Obrigatório' }}
        />
        <Input
          name="email"
          label="Email"
          rules={{
            required: 'Campo Obrigatório',
            pattern: { value: emailRegex, message: 'Email inválido' },
          }}
        />
        <Input
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
        <Input
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

        <Link href="#">Esqueceu a senha?</Link>

        <Button type="submit" label="Submit" />
      </Form>
    </div>
  );
}

export default NativeForm;
