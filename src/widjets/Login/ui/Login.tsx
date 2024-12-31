import { Input } from '../../../app/ui/Input';

export const Login = () => {
  return (
    <>
      <Input label="Login" variant="outlined" />
      <Input label="Password" variant="outlined" />
      <button>Log In</button>
      <a href="">Forgot password?</a>
    </>
  );
};
