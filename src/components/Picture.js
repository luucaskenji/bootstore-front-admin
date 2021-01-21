import SelectInput from '@material-ui/core/Select/SelectInput';
import React from 'react';
import {
    List,
    Create,
    Datagrid,
    TextField,
    DeleteButton,
    SimpleForm,
    TextInput,
    UrlField,
    ReferenceField,
    ReferenceInput,
    ImageField
} from 'react-admin';

export const PictureList = props => {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source='productId' reference="products">
                <TextField source='id' />
                <TextField source='name' />
            </ReferenceField>
            <ImageField source="url"/>
            <DeleteButton/>
        </Datagrid>
    </List>
}

export const PictureCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source='productId' reference="products">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="url"/>
        </SimpleForm>
    </Create>
);


