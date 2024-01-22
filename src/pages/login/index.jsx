
import logo from '../../assets/logo.svg';
import { Input } from "../../components/Input";
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import loginSchema from "../../schema/loginSchema";
import { Spacing } from "../../components/Spacing";
import { Logo } from '../../components/logo';
import { Actions, Form } from '../../components/Form';
import { Main } from '../../components/Main/main';
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
 import { login } from '../../service/authServices';



export default function Login() {
    const navigate = useNavigate();

    const {
        user,

    }=useStore();

    const {
        handleSubmit,
        control,
        formState:{
            isValid,
        }
        

    } = useForm({
        resolver: yupResolver(loginSchema),
       mode: 'onChange', 
       defaultValues:{
        username : "damfer",
        password : "123456",
       }
    });

    const onSubmit = async (data) =>{
        const{
            username,
            password,
        }= data;

        const {success , message, result} = await login(username, password);

        alert(message);

        if(success){
            user.setUserData(result);

            navigate('/');
        } 
        
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
                type='password'
                
                />
                </Spacing>
                <Actions>
                    <Spacing $bottom={24}>
                        <Button disabled={!isValid} $color="secondary" type='subnit'>SING IN</Button>
                    </Spacing>

                    <Spacing>
                        <Button  onClick={() => navigate('/register')} type='button' $color="primaryDark">SING UP</Button>
                    </Spacing>
                </Actions>
                
            </Form>
        </Main>
    );
};