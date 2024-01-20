import { ThemeProvider } from 'styled-components';

import theme from './theme';

import { RouterProvider } from 'react-router-dom';
import './global.css'
import authRouter from './routes/authroutes';
import appRouter from './routes/appRouter'
import { AuthLayout } from './components/layouts/authLayouts';
import { AppLayout } from './components/layouts/appLayouts';

import { StateProvider, useStore } from './store';




function App() {
  return(
  <ThemeProvider theme={theme} >
      <StateProvider>
        <Layout/>
      </StateProvider>
</ThemeProvider>
  );

}



 function Layout(){

  const {
    user, 
  } = useStore();



  return  user.name !== ''
  ? (
    <AppLayout>
     <RouterProvider router={ appRouter} />
     </AppLayout>
  )
  :(
    <AuthLayout>
  <RouterProvider router={ authRouter} />
</AuthLayout>
  );


}



export default App;
