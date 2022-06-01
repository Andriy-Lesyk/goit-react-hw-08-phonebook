import React from 'react';
import Form from '../../components/Forms/Forms';
import Filter from '../../components/Filter/Filter';
import Contact from '../../components/Contacts/Contacts';
import Box from '@mui/material/Box';

function HomeViews() {
  return (
    <div>
      <Box sx={{
                  marginTop: 2,
                  display: 'flex',
                  flexDirection: 'raw',
                  justifyContent: "center"
                }}>
        <Box>
          <Form />
          <Filter />
        </Box>
        <Contact />
      </Box>
    </div>
  );
}

export default HomeViews;
