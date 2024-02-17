import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

import { AuthLayout } from "./components/layouts/authLayout";

import theme from "./theme";

import authRouter from "./routes/authRouter";
import appRouter from "./routes/appRouter";

import './global.css';
import { AppLayout } from "./components/layouts/appLayout";
import { StateProvider, useStore } from "./store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <Layout />
      </StateProvider>
    </ThemeProvider>
  );
}

function Layout() {
  const {
    user,
  } = useStore();

  return user.name !== ''
    ? (
        <AppLayout>
          <RouterProvider router={appRouter} />
        </AppLayout>
      )
    : (
        <AuthLayout>
          <RouterProvider router={authRouter} />
        </AuthLayout>
      );
}

export default App;
