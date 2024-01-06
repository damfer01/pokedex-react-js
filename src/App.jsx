import { ThemeProvider } from 'styled-components';

import { RouterProvider } from 'react-router-dom';
import './global.css'
import authRouter from './routes/authroutes';
import { AuthLayuot } from './components/layouts/authLayouts';
import Theme from './theme';

function App() {

  return (
    <ThemeProvider theme={Theme} >
      <AuthLayuot>
        <RouterProvider router={ authRouter} />
      </AuthLayuot>
    </ThemeProvider>


  );
}

export default App;
