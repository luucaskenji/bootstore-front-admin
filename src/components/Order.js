import React from 'react';
import {
    List,
    Create,
    Datagrid,
    TextField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    ArrayInput,
    ArrayField,
    NumberField
} from 'react-admin';

export const OrderList = props => {
    return <List {...props}>
        <Datagrid rowClick="show">
            <TextField source='id' />
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="status" />
        </Datagrid>
    </List>
}

export const OrderShow = props => {
    return <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="status" />
            <ArrayField source="products">
                <Datagrid>
                    <TextField source="name"/>
                    <NumberField source="orderProduct.quantity"/>
                    <NumberField source="price"/>
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
}



