import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Contacts, Contac } from './Contacts.styles';
import {
  deleteContacts,
  fetchContacts,
} from '../../redux/contacts/contactsOperations';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsSelect = useSelector(state => state.contacts.entities);
  const filterSelect = useSelector(state => state.filter);

  let contacts =
    filterSelect === ''
      ? contactsSelect
      : contactsSelect.filter(cont =>
          cont.name.toLowerCase().includes(filterSelect.filter.toLowerCase())
        );

  return (
    <div>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3">
          Contacts
        </Typography>
        <Contacts>
          {contacts.length > 0 ? (
            contacts.map(({ name, number, id }) => (
              <Contac key={id}>
                <Box
                  sx={{
                    marginTop: '18px',
                    display: 'flex',
                    flexDirection: 'raw',
                    alignItems: 'center',
                  }}
                >
                  <TextField value={name} />
                  <TextField value={number} sx={{ marginLeft: '10px' }} />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ marginLeft: '10px', width: '30px', height: '54px' }}
                    onClick={async () => {
                      await dispatch(deleteContacts(id));
                      dispatch(fetchContacts());
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </Contac>
            ))
          ) : (
            <Typography component="h1" variant="h4">
              There are no contacts
            </Typography>
          )}
        </Contacts>
      </Box>
    </div>
  );
}

export default Contact;
