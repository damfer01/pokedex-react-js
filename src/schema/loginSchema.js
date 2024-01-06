import * as yup from 'yup'

const message = 'campo obrigatorio'

const loginSchema = yup.object({
    username: yup.string().required(message),
    password: yup.string().required(message),
});

export default loginSchema;