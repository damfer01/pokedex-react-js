import Api from '../config/api';

export async function getAllPokemon(token, page, perPage){
    try{
        const {data} = await Api.get('/pokemon',{
          headers:{
            'Authoruzation': `Bearer ${token}`
          },
        params:{
        page,
        perPage,
        },
    });
    return data ;
    }catch (err){
        if( err.response ) {
            const { data } = err.response;
      
            return {
              success: data.success,
              message: data.message,  
            };
          } else {
            return {
              success: false,
              message: 'Falha ao se comunicar com o servidor!',
            };
          }

    }
};