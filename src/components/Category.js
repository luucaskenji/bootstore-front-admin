import React from 'react';
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
} from 'react-admin';

export const CategoryList = props => {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source='id' />
            <TextField source='name' />
            <DateField source="createdAt" />
            <EditButton basePath='/categories' />
            <DeleteButton basePath='/categories' />
        </Datagrid>
    </List>
}

export const CategoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' />
        </SimpleForm>
    </Create>
);

export const CategoryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField disabled source='id' />
            <TextField source='name' />
        </SimpleForm>
    </Edit>
);

