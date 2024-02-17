import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from '../../assets/logo.svg';
import { Input } from "../../components/Input";

import registerSchema from '../../schema/registerSchema';
import { Spacing } from "../../components/Spacing";
import { Logo } from "../../components/Logo";
import { Actions, Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authServices";
import { useStore } from "../../store";

export default function Register() {
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
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: 'Ridam',
      username: 'ridam',
      password: '123456',
      confirmPassword: '123456',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const {
      name,
      username,
      password,
      confirmPassword,
    } = data;

    const { success, message, result } = await register(name, username, password, confirmPassword);

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
            name="name"
            label="Name"
          />
        </Spacing>

        <Spacing $fullWidth={true} $bottom={16}>
          <Input
            control={control}
            name="username"
            label="Username"
          />
        </Spacing>

        <Spacing $fullWidth={true} $bottom={16}>
          <Input
            control={control}
            name="password"
            label="Password"
            type="password"
          />
        </Spacing>

        <Spacing $fullWidth={true} $bottom={16}>
          <Input
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
          />
        </Spacing>

        <Actions>
          <Spacing $fullWidth={true} $bottom={24}>
            <Button disabled={!isValid} $color="secondary" type="submit">SAVE</Button>
          </Spacing>

          <Spacing>
            <Button onClick={() => navigate(-1)} type="button" $color="primaryDark">BACK</Button>
          </Spacing>
        </Actions>
      </Form>
    </Main>
  );
};
