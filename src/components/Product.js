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
    NumberInput,
    ImageField
} from 'react-admin';

export const ProductList = props => {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source='id' />
            <TextField source='name' />
            <TextField source="price" />
            <TextField multiline source="description"/>
            <NumberField source="units"/>
            <ImageField source="mainPicture"/>   
            <EditButton/>
            <DeleteButton/>
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
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source="price" />
            <TextInput multiline source="description"/>
            <NumberInput source="units"/>
            <TextInput source="mainPicture"/> 
        </SimpleForm>
    </Edit>
);

