
import logo from '../../assets/logo.svg';
import { Input } from "../../components/Input";
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import loginSchema from "../../schema/loginSchema";
import { Spacing } from "../../components/Spacing";
import { Logo } from '../../components/logo';
import { Actions, Form } from '../../components/Form';
import { Main } from '../../components/Main/main';




export default function Login() {

    const {
        handleSubmit,
        control,
        formState:{
            isValid,
        }
        

    } = useForm({
        resolver: yupResolver(loginSchema),
       mode: 'onChange',
    });

    const onSubmit = (data) =>{
        console.log(data);
    };
    
    return(
        <Main>
            <Logo src={logo} />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Spacing $bottom={16}>
                <Input
                control={control}
                name='username'
                label='username'
                
                />
                </Spacing>

                <Spacing $bottom={36}>
                <Input
                control={control}
                name='password'
                label='password'
                
                />
                </Spacing>
                <Actions></Actions>
                
            </Form>
        </Main>
    );
};