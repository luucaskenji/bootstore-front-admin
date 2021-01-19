import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='categories' list={CategoryList}/>
    </Admin>
  );
}

export default App;
