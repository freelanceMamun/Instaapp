import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const style = {
  global: (props) => ({
    body: {
      bg: mode('gray.100', '#000')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props),
    },
  }),
};

const theme = extendTheme({ config, style });

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
