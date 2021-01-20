import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { CategoryCreate, CategoryList } from './components/Category';
import { ProductCreate, ProductEdit, ProductList } from './components/Product';
import { CategoryProductCreate, CategoryProductList } from './components/CategoryProduct';
import { UserCreate, UserList } from './components/User';
import authProvider from './providers/authProvider';
import { OrderList, OrderShow } from './components/Order';

function App() {
  return (
    <Admin /*authProvider={authProvider}*/ dataProvider={restProvider('http://localhost:3000/admin')}>
      <Resource name='categories' list={CategoryList} create={CategoryCreate}/>
      <Resource name='products' list={ProductList} create={ProductCreate} edit={ProductEdit}/>
      <Resource name='categoryProducts' list={CategoryProductList} create={CategoryProductCreate}/>
      <Resource name='users' list={UserList} create={UserCreate}/>
      <Resource name='orders' list={OrderList} show={OrderShow}/>
    </Admin>
  );
}

export default App;
