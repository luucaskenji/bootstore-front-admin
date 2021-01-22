import React from "react";
import {
    List,
    Create,
    Datagrid,
    TextField,
    DeleteButton,
    SimpleForm,
    TextInput,
} from "react-admin";

export const UserList = props => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" label="Nome" />
            <TextField source="email" label="E-mail" />
            <TextField source="cpf" label="CPF" />  
            <DeleteButton label="Excluir" />
        </Datagrid>
    </List>
}

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nome"  />
            <TextInput source="email" label="E-mail"  />
            <TextInput source="cpf" label="CPF" />
        </SimpleForm>
    </Create>
);


