import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from '../../assets/logo.svg';
import { Input } from "../../components/Input";

import loginSchema from '../../schema/loginSchema';
import { Spacing } from "../../components/Spacing";
import { Logo } from "../../components/Logo";
import { Actions, Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authServices";
import { useStore } from "../../store";

export default function Login() {
  const navigate = useNavigate();

  const {
    user,
  } = useStore();

  const {
    handleSubmit,
    control,
    formState: {
      isValid,
    }
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      username: 'ridam',
      password: '123456',
    }
  });

  const onSubmit = async (data) => {
    const {
      username,
      password,
    } = data;

    const { success, message, result } = await login(username, password);

    alert(message);

    if(success) {
      user.setUserData(result);

      navigate('/');
    }
  };

  return (
    <Main>
      <Logo src={logo} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Spacing $fullWidth={true} $bottom={16}>
          <Input
            control={control}
            name="username"
            label="Username"
          />
        </Spacing>

        <Spacing $fullWidth={true} $bottom={36}>
          <Input
            control={control}
            name="password"
            label="Password"
            type="password"
          />
        </Spacing>

        <Actions>
          <Spacing $fullWidth={true} $bottom={24}>
            <Button disabled={!isValid} $color="secondary" type="submit">SIGN IN</Button>
          </Spacing>

          <Spacing $fullWidth={true}>
            <Button onClick={() => navigate('/register')} type="button" $color="primaryDark">SIGN UP</Button>
          </Spacing>
        </Actions>
      </Form>
    </Main>
  );
};
