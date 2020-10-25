import React from 'react';
import {
  Grid,
  Card as MUICard,
  // Input as MUIInput,
  Paper as MUIPaper,
  Button,
  TextField as MUITextField,
} from '@material-ui/core';
import styled from 'styled-components';
import { theme, ThemeProps } from '../../theme';

type ThemeType = {
  theme: ThemeProps;
};
const Wrapper = styled.div.attrs(({ theme }: ThemeType) => {
  return {
    style: {
      backgroundColor: theme.secondary,
    },
  };
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;
const Paper = styled(MUIPaper).attrs(({ theme }: ThemeType) => {
  return {
    style: {
      backgroundColor: theme.primary,
    },
  };
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Card = styled(MUICard).attrs(({ theme }: ThemeType) => {
  return {
    style: {
      backgroundColor: theme.secondary,
    },
  };
})`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  margin: 20px;
`;
const TextField = styled(MUITextField).attrs(({ theme }: ThemeType) => {
  return {
    style: {
      backgroundColor: theme.primary,
    },
  };
})`
  margin-bottom: 2px;
`;
const Title = styled.h3`
  margin: 0 0 20px 0;
`;

export default function Home(): JSX.Element {
  return (
    <Wrapper theme={theme.light}>
      <Paper theme={theme.light}>
        <Grid container>
          <Grid item xs={6}>
            <Card theme={theme.light}>
              <Title>Your team</Title>
              <TextField
                id="outlined-multiline-static"
                theme={theme.light}
                placeholder={'IGNs of allies (separated by commas)'}
                multiline
                rows={4}
                variant="outlined"
              />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card theme={theme.light}>
              <Title>Enemy team</Title>
              <TextField
                id="outlined-multiline-static"
                theme={theme.light}
                placeholder={'IGNs of enemies (separated by commas)'}
                multiline
                rows={4}
                variant="outlined"
              />
            </Card>
          </Grid>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          style={{ marginBottom: '20px' }}>
          Scout
        </Button>
      </Paper>
    </Wrapper>
  );
}
