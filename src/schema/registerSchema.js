import * as yup from "yup";

const message = 'Required Field';

const registerSchema = yup.object({
  name: yup.string().required(message),
  username: yup.string().required(message).min(5, 'Minimum of 5 Characters'),
  password: yup.string().required(message).min(6, 'Minimum of 6 Characters'),
  confirmPassword: yup.string().required(message).min(6, 'Minimum of 6 Characters').oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default registerSchema;
