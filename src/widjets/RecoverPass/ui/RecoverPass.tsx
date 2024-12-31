import { Input } from '../../../app/ui/Input';

export const RecoverPass = () => {
  return (
    <>
      <p>We have sent an SMS with the code to your phone or enter it in your email.</p>
      <Input label="E-mail" variant="outlined" />
      <button>Send message</button>
    </>
  );
};
