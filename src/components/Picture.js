import React from "react";
import {
    List,
    Create,
    Datagrid,
    TextField,
    DeleteButton,
    SimpleForm,
    TextInput,
    SelectInput,
    ReferenceField,
    ReferenceInput,
    ImageField
} from "react-admin";

export const PictureList = props => {
    return <List {...props}>
        <Datagrid>
            <ReferenceField source="productId" reference="products" label="Produto" >
                <TextField source="name" />
            </ReferenceField>
            <ImageField source="url" label="Foto principal" />
            <DeleteButton/>
        </Datagrid>
    </List>
}

export const PictureCreate = props => (
    <Create {...props} basePath="">
        <SimpleForm>
            <ReferenceInput source="productId" reference="products" label="Produto" >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="url" label="Link da foto principal" />
        </SimpleForm>
    </Create>
);


