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
    Edit,
    UrlField,
    NumberField,
    NumberInput
} from 'react-admin';

export const ProductList = props => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source="price" />
            <TextField multiline source="description"/>
            <NumberField source="units"/>
            <UrlField source="mainPicture"/>   
            <EditButton basePath='/categories' />
            <DeleteButton basePath='/categories' />
        </Datagrid>
    </List>
}

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput  source="price" />
            <TextInput  multiline source="description"/>
            <NumberInput source="units"/>
            <TextInput source="mainPicture"/>  
        </SimpleForm>
    </Create>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField disabled source='id' />
            <TextField source='name' />
            <TextField source="price" />
            <TextField multiline source="description"/>
            <NumberField source="units"/>
            <UrlField source="mainPicture"/> 
        </SimpleForm>
    </Edit>
);

