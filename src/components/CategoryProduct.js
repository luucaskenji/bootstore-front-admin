import React from "react";
import {
    List,
    Create,
    Datagrid,
    TextField,
    DeleteButton,
    SimpleForm,
    SelectInput,
    ReferenceField,
    ReferenceInput
} from "react-admin";

export const CategoryProductList = props => {
    return <List {...props} basePath="/categoryProducts">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="productId" reference="products" label="Produto" >
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="categoryId" reference="categories" label="Categoria" >
                <TextField source="name" />
            </ReferenceField>
            <DeleteButton/>
        </Datagrid>
    </List>
}

export const CategoryProductCreate = props => (
    <Create {...props} basePath="">
        <SimpleForm>
            <ReferenceInput source="productId" reference="products" label="Produto" >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="categoryId" reference="categories" label="Categoria" >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);


