/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useLayoutEffect, useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Container, Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Button from '../../components/Button';
import {TextInput} from 'react-native-gesture-handler';
import {GREY8} from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {coreActions} from '../../store/actionTypes';

const NameAvatar = ({name}) => {
  let title = '';

  if (name) {
    title = name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  }
  if (title.length > 2) {
    title = `${title.charAt(0)}${title.charAt(title.length - 1)}`;
  }
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.nameText}>{title}</Text>
    </View>
  );
};

const UserItem = props => {
  const {user, selectedUsersMap, onPress} = props;

  const [checked, setChecked] = useState(
    selectedUsersMap[user.id || 0] || false,
  );

  useLayoutEffect(() => {
    if ((selectedUsersMap[user.id || 0] || false) !== checked) {
      setChecked(selectedUsersMap[user.id || 0] || false);
    }
  });

  return (
    <TouchableOpacity
      onPress={() => onPress(user)}
      style={styles.itemContainer}>
      <NameAvatar name="Darlene Robertson" />
      <View style={styles.content}>
        <Text style={styles.itemTitle}>{user.name}</Text>
        <Text style={styles.itemSubtitle}>{user.email}</Text>
      </View>
      {checked ? (
        <Icon name="check-circle" type="FontAwesome" style={styles.checkIcon} />
      ) : (
        <View style={styles.unCheckIcon} />
      )}
    </TouchableOpacity>
  );
};

const usersToUserMap = users => {
  return users.reduce((prev, user) => ({...prev, [user.id]: true}), {});
};

const GiftNFT = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.core.users || []);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [usersData, setUsersData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  useEffect(() => {
    const searchString = search?.trim();
    const timer = setTimeout(() => {
      const data = [...users].filter(
        item =>
          item.name?.toLowerCase()?.indexOf(searchString?.toLowerCase()) > -1,
      );
      setUsersData(data);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    dispatch({type: coreActions.FETCH_USERS});
  }, []);

  const selectedUsersMap = useMemo(
    () => (selectedUsers ? usersToUserMap(selectedUsers) : []),
    [selectedUsers],
  );

  const handleSelect = item => {
    const newSelectedUsers = [...selectedUsers];
    const position = newSelectedUsers.findIndex(el => el.id === item.id);

    if (position === -1) {
      newSelectedUsers.push(item);
    } else {
      newSelectedUsers.splice(position, 1);
    }
    setSelectedUsers(newSelectedUsers);
  };

  const renderUserItem = ({item}) => {
    return (
      <UserItem
        user={item}
        selectedUsersMap={selectedUsersMap}
        onPress={handleSelect}
      />
    );
  };

  return (
    <Container style={styles.container}>
      <View style={styles.logoBackground}>
        <Image
          source={require('../../assets/flower.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.overContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Gift an NFT</Text>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.closeIconContainer}>
            <Icon name="close" type="AntDesign" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.mainConatiner}>
          <View style={styles.searchContainer}>
            <View style={styles.content}>
              <View style={styles.inputContainer}>
                <Icon
                  name="search1"
                  type="AntDesign"
                  style={styles.searchIcon}
                />
                <View style={styles.content}>
                  <TextInput
                    placeholder="Search People"
                    style={styles.inputText}
                    placeholderTextColor={GREY8}
                    value={search}
                    onChangeText={setSearch}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.importBtn}>Import</Text>
          </View>
          <View>
            <FlatList
              data={usersData}
              style={styles.listContainer}
              renderItem={renderUserItem}
              keyExtractor={item => `${item.id}`}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.center}>
            <Button
              disabled={!selectedUsers.length}
              title="Send Gift"
              onPress={() =>
                navigation.navigate('Home', {
                  selectedUsers: selectedUsers.map(item => item.id),
                })
              }
            />
            <View style={styles.shareBtn}>
              <Text style={styles.importBtn}>Share App</Text>
              <Image
                source={require('../../assets/share.png')}
                style={styles.shareImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default GiftNFT;
