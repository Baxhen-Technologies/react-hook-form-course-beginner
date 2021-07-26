import './App.css';
import Form from './components/react-hook-form/form';
import { Input } from './components/react-hook-form/native';
import Button from './components/button';
import { emailRegex } from './utils';
import Link from './components/link';

function App() {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <div className="container">
        <Form onSubmit={onSubmit} title="Cadastro">
          <Input
            name="nome"
            placeholder="Nome"
            rules={{ required: 'Campo Obrigatório' }}
          />
          <Input
            name="email"
            placeholder="Email"
            rules={{
              required: 'Campo Obrigatório',
              pattern: { value: emailRegex, message: 'Email inválido' },
            }}
          />
          <Input
            name="senha"
            placeholder="Senha"
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
            placeholder="Confirmação de Senha"
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
    </div>
  );
}

export default App;
