import * as React from 'react';
import { useDispatch } from 'react-redux';
import { inputFilter } from '../../redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Filter() {
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(inputFilter(e.currentTarget.value));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Find contacts by name"
            name="email"
            autoFocus
            onChange={changeFilter}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
