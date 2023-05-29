import React from 'react';
import { Box } from '@mui/material';

const text = [
  'Culture', 'Creativity', 'Food', 'Travel', 'Humor'
]

const Categories = () => {
  return (
    <Box>
      <h2>Categories</h2>
      <ul style={{ listStyle: "none" }}>
        {text.map((value) => (
          <li style={{ height: '4rem', marginBottom: '1rem',backgroundColor: '#acabb0',display:'flex',justifyContent:'center' ,backgroundImage:'linear-gradient(315deg,#db588b 0%, #9165a1 74%)'}}>
            <div style={{ color: 'white' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
              <h2 >{value}</h2>
            </div>
          </li>
        ))}

      </ul>
    </Box>
  );
}

export default Categories;


