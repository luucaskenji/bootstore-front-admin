import React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    ArrayField,
    NumberField
} from "react-admin";

export const OrderList = props => {
    return <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" label="Cliente" >
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="status" />
        </Datagrid>
    </List>
}

export const OrderShow = props => {
    return <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users" label="Cliente" >
                <TextField source="name"/>
            </ReferenceField>

            <TextField source="address.streetName" label="Rua" />
            <TextField source="address.streetNumber" label="Número" />
            <TextField source="address.complement" label="Complemento" />
            <TextField source="address.neighbourhood" label="Bairro" />
            <TextField source="address.cep" label="CEP" />
            <TextField source="address.city" label="Cidade" />
            <TextField source="address.state" label="Estado" />
            <TextField source="status" />

            <ArrayField source="products" label="Produtos">
                <Datagrid>
                    <TextField source="name" label="Nome" />
                    <NumberField source="orderProduct.quantity" label="Quantidade" />
                    <NumberField source="price" label="Preço (centavos)" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
}



