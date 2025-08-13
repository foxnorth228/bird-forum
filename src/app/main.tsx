import './index.css';

import { AppRouter } from '@app/router';
import { store } from '@app/store/store';
import { theme } from '@app/theme/theme';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter currentRole={'user'} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
