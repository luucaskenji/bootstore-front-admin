import React from 'react';
import {
    List,
    Create,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const UserList = props => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source="email" />
            <TextField source="cpf"/>  
            <EditButton/>
            <DeleteButton />
        </Datagrid>
    </List>
}

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source="email" />
            <TextInput source="cpf"/>   
        </SimpleForm>
    </Create>
);


