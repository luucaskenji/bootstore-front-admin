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
    SelectInput,
    ReferenceField,
    ReferenceInput
} from 'react-admin';

export const CategoryProductList = props => {
    return <List {...props} basePath='/categoryProducts'>
        <Datagrid rowClick="edit">
            <TextField source='id' />
            <ReferenceField source='productId' reference='products'>
                <TextField source='name' />
            </ReferenceField>
            <ReferenceField source='categoryId' reference='categories'>
                <TextField source='name' />
            </ReferenceField>
            <DeleteButton/>
        </Datagrid>
    </List>
}

export const CategoryProductCreate = props => (
    <Create {...props} basePath=''>
        <SimpleForm>
            <ReferenceInput source='productId' reference='products'>
                <SelectInput optionText='name' />
            </ReferenceInput>
            <ReferenceInput source='categoryId' reference='categories'>
                <SelectInput optionText='name' />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);


