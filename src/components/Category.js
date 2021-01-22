import React from "react";
import {
    List,
    Create,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    SimpleForm,
    TextInput,
    Edit
} from "react-admin";

export const CategoryList = props => {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" label="Nome" />
            <DateField source="createdAt" label="Data de criação" />
            <EditButton basePath="/categories" label="Editar" />
            <DeleteButton basePath="/categories" label="Excluir" />
        </Datagrid>
    </List>
}

export const CategoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nome" />
        </SimpleForm>
    </Create>
);

export const CategoryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField disabled source="id" />
            <TextField source="name" label="Nome" />
        </SimpleForm>
    </Edit>
);

