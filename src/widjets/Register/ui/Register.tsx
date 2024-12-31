import { Input } from '../../../app/ui/Input';

export const Register = () => {
  return (
    <>
      <Input label="E-mail" variant="outlined" />
      <Input label="Password" variant="outlined" />
      <Input label="Repeat password" variant="outlined" />
      <button>Register</button>
    </>
  );
};
