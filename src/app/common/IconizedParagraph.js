import React from 'react';

const IconizedParagraph = ({ icon, text }) => (
  <p style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ marginRight: '1em' }}>{icon}</div>
    {text}
  </p>
);

export default IconizedParagraph;
