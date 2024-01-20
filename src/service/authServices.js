import api  from "../config/api";

export async function register(name , username, password , confirmPassword){
    try {
        const {data} = await api.post('/auth/register' , {
            name,
            username,
            password,
            confirmPassword,
        });
        return data;
    }catch (err){
        if(err.response) {
            const {data} = err.response;

            return{
                success:data.success,
                message: data.message,

            };
        }else{
            return {
                success:false,
                message:"Falha ao se comunicar com o servidor!"
            };
        }
    }
};