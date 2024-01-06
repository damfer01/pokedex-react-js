import * as yup from 'yup'

const message = 'required'

const registerSchema = yup.object({
    name: yup.string().required(message),
    username: yup.string().required(message).min(5,'Mininin of 5 characters'),
    password: yup.string().required(message).min(6,'Mininiof 5 characters'),
    confirmPassword: yup.string().required(message).oneOf([yup.ref('password') , null], 'Password must match'),
});

export default registerSchema;

