import React from "react";
import {
    List,
    Create,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    SimpleForm,
    TextInput,
    Edit,
    NumberField,
    NumberInput,
    ImageField
} from "react-admin";

export const ProductList = props => {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" label="Nome" />
            <TextField source="price" label="Preço" />
            <TextField multiline source="description" label="Descrição" />
            <NumberField source="units" label="Unidades" />
            <ImageField source="mainPicture" label="Foto Principal" />   
            <EditButton label="Editar" />
            <DeleteButton label="Excluir" />
        </Datagrid>
    </List>
}

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nome" />
            <TextInput  source="price" label="Preço" />
            <TextInput  multiline source="description" label="Descrição" />
            <NumberInput source="units" label="Unidades em estoque" />
            <TextInput source="mainPicture" label="Foto principal" />  
        </SimpleForm>
    </Create>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" label="Nome" />
            <TextInput source="price" label="Preço" />
            <TextInput multiline source="description" label="Descrição" />
            <NumberInput source="units" label="Unidades em estoque" />
            <TextInput source="mainPicture" label="Foto principal" /> 
        </SimpleForm>
    </Edit>
);

