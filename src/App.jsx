import { ThemeProvider } from 'styled-components';

import { RouterProvider } from 'react-router-dom';
import './global.css'
import router from './routes';
import { AuthLayuot } from './components/layouts/authLayouts';
import Theme from './theme';

function App() {

  return (
    <ThemeProvider theme={Theme} >
      <AuthLayuot>
        <RouterProvider router={router} />
      </AuthLayuot>
    </ThemeProvider>


  );
}

export default App;
