import '@mantine/core/styles.css';

import { Toaster } from 'react-hot-toast';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Toaster />
      <Router />
    </MantineProvider>
  );
}
