import React from "react";
import {Admin, Resource} from "react-admin";
import { CategoryCreate, CategoryEdit, CategoryList } from "./components/Category";
import { ProductCreate, ProductEdit, ProductList } from "./components/Product";
import { CategoryProductCreate, CategoryProductList } from "./components/CategoryProduct";
import { UserCreate, UserList } from "./components/User";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";
import { OrderList, OrderShow } from "./components/Order";
import { PictureCreate, PictureList } from "./components/Picture";

import UserIcon from "@material-ui/icons/Group";
import PictureIcon from "@material-ui/icons/PhotoLibrary"
import CategoryIcon from "@material-ui/icons/Category";
import OrderIcon from "@material-ui/icons/ShoppingCart";

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="categories" options={{ label: "Categorias" }} list={CategoryList} create={CategoryCreate} edit={CategoryEdit} icon={CategoryIcon}/>
      <Resource name="products" options={{ label: "Produtos" }} list={ProductList} create={ProductCreate} edit={ProductEdit}/>
      <Resource name="categoryProducts" options={{ label: "Relação Produtos/Categorias" }} list={CategoryProductList} create={CategoryProductCreate}/>
      <Resource name="users" options={{ label: "Clientes" }} list={UserList} create={UserCreate} icon={UserIcon}/>
      <Resource name="orders" options={{ label: "Pedidos" }} list={OrderList} show={OrderShow} icon={OrderIcon}/>
      <Resource name="pictures" options={{ label: "Fotos" }} list={PictureList} create={PictureCreate} icon={PictureIcon}/>
    </Admin>
  );
}

export default App;
