import React from 'react';
import styled from 'styled-components';
import { theme, ThemeProps } from './theme';
import Home from './components/Home';

const StyledApp = styled.div.attrs((theme: ThemeProps) => {
  return {
    style: {
      backgroundColor: theme.primary,
      color: theme.textPrimary,
    },
  };
})`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function App(): JSX.Element {
  const defaultTheme = 'light';
  return (
    <StyledApp className="App" theme={theme[defaultTheme]}>
      <Home />
    </StyledApp>
  );
}

export default App;
