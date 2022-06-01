import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuId } from 'uuid';
import { addContacts } from '../../redux/contacts/contactsOperations';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Forms() {
  const dispatch = useDispatch();
  const contactsSelect = useSelector(state => state.contacts.entities);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleNameSubmit = e => {
    e.preventDefault();
    const id = uuId();

    const contCheck = contactsSelect.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    contCheck
      ? alert(`${name} is olready in contacts`)
      : dispatch(addContacts({ id, name, number }));
    resetForm();
  };
  console.log(name);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Phonebook
          </Typography>
          <Box component="form" onSubmit={handleNameSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              autoComplete="name"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Number"
              id="number"
              value={number}
              autoComplete="number"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
