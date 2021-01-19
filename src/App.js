import React from 'react';
import {Admin, ListGuesser, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { CategoryCreate, CategoryList } from './components/Category';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='categories' list={CategoryList} create={CategoryCreate}/>
      <Resource name='users' list={ListGuesser}/>
    </Admin>
  );
}

export default App;
