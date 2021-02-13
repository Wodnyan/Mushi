import { FormControl, Input, Label } from "../styles/Forms";

interface Props {}

const PasswordInput: React.FC<Props> = () => {
  return (
    <FormControl>
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </FormControl>
  );
};

export default PasswordInput;
