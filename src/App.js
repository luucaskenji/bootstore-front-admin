import React from 'react';
import {Admin, Resource} from 'react-admin';
import { CategoryCreate, CategoryList } from './components/Category';
import { ProductCreate, ProductEdit, ProductList } from './components/Product';
import { CategoryProductCreate, CategoryProductList } from './components/CategoryProduct';
import { UserCreate, UserList } from './components/User';
import authProvider from './providers/authProvider';
import dataProvider from './providers/dataProvider';
import { OrderList, OrderShow } from './components/Order';
import { PictureCreate, PictureList } from './components/Picture';

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name='categories' list={CategoryList} create={CategoryCreate}/>
      <Resource name='products' list={ProductList} create={ProductCreate} edit={ProductEdit}/>
      <Resource name='categoryProducts' list={CategoryProductList} create={CategoryProductCreate}/>
      <Resource name='users' list={UserList} create={UserCreate}/>
      <Resource name='orders' list={OrderList} show={OrderShow}/>
      <Resource name='pictures' list={PictureList} create={PictureCreate}/>
    </Admin>
  );
}

export default App;
