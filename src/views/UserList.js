import { getActionFromState } from '@react-navigation/native';
import { Avatar, Button, Icon, ListItem } from '@rneui/base';
import { ListItemBase } from '@rneui/base/dist/ListItem/ListItem';
import { ListItemAccordion } from '@rneui/base/dist/ListItem/ListItem.Accordion';
import { ListItemCheckBox } from '@rneui/base/dist/ListItem/ListItem.CheckBox';
import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';
import { ListItemSwipeable } from '@rneui/base/dist/ListItem/ListItem.Swipeable';
import React, { useContext } from "react";
import { Alert, FlatList, View } from "react-native";
import UsersContext from '../context/usersContext';

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário','Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: "deleteUser",
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActionFromState(user){
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='orange'/>}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red'/>}
                />
            </>
        )
    }

    function getUserItem({ item }){
        return (
            <ListItem 
                key={item.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar source={ { uri: item.avatarUrl } } />
                <ListItem.Content>
                    <ListItem.Title>{ item.name }</ListItem.Title>
                    <ListItem.Subtitle>{ item.email }</ListItem.Subtitle>
                </ListItem.Content>
                {getActionFromState(item)}
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}