import React from 'react';
import {Admin, ListGuesser, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { CategoryCreate, CategoryList } from './components/Category';
import { ProductCreate, ProductEdit, ProductList } from './components/Product';
import { CategoryProductCreate, CategoryProductList } from './components/CategoryProduct';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000/admin')}>
      <Resource name='categories' list={CategoryList} create={CategoryCreate}/>
      <Resource name='products' list={ProductList} create={ProductCreate} edit={ProductEdit}/>
      <Resource name='categoryProducts' list={CategoryProductList} create={CategoryProductCreate}/>
    </Admin>
  );
}

export default App;
