import React from 'react';
import { Dropdown, Container, Input } from 'semantic-ui-react';

const options = [
  { key: 'Name', text: 'Name', value: 'Name' },
  { key: 'ID', text: 'ID', value: 'ID' },
  { key: 'Email', text: 'Email', value: 'Email' },
  { key: 'Domain', text: 'Domain', value: 'Domain' },
];
const Search = ({ port }) => {
  const [query, setQuery] = React.useState('');

  const handleChange = (e) => {
    console.log(port);
    console.log('Handled change');
    setQuery(e.target.value);
    if (port) {
      port.postMessage({ msg: query });
    }
  };

  return (
    <Container>
      <Input
        fluid
        size='small'
        loading
        label={<Dropdown size='small' inverted defaultValue='Name' options={options} />}
        labelPosition='left'
        placeholder='Start typing'
        onChange={handleChange}
        value={query}
      />
    </Container>
  );
};

export default Search;
