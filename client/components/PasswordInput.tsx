import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { FormControl, Label } from "../styles/Forms";
import Input from "./Input";

interface Props {
  [x: string]: any;
}

const PasswordInput: React.FC<Props> = ({ ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordShow = () => {
    setShowPassword((prev) => !prev);
  };

  const Icon = () => {
    return (
      <div onClick={togglePasswordShow}>
        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
      </div>
    );
  };

  return (
    <FormControl>
      <Label htmlFor="password">Password</Label>
      <Input
        iconLeft={<FiLock size={20} />}
        iconRight={<Icon />}
        id="password"
        type={showPassword ? "text" : "password"}
        {...rest}
      />
    </FormControl>
  );
};

export default PasswordInput;
