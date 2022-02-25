import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Container, Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import InputBox from '../../components/TextInput';
import Button from '../../components/Button';

const NEARAccount = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [wallet, setWallet] = useState('');

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
          <Text style={styles.headerText}>Create NEAR Account</Text>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.closeIconContainer}>
            <Icon name="close" type="AntDesign" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.indicator} />
        <ScrollView contentContainerStyle={styles.mainConatiner}>
          <Text style={styles.smallText}>
            Enter an Account ID to use with your NEAR account. Your Account ID
            will be used for all NEAR operations, including sending and
            receiving assets.
          </Text>
          <InputBox
            label="FULL NAME"
            value={name}
            onChangeText={setName}
            placeholder={'Ex John Doe'}
          />
          <View style={styles.input}>
            <InputBox
              label="WALLET ID"
              value={wallet}
              onChangeText={setWallet}
              placeholder={'yourname.near'}
              hasInfoIcon
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Create an account"
              disabled={name.length === 0 || wallet.length === 0}
              onPress={() => navigation.navigate('GiftNFT')}
            />
          </View>
          <Text style={styles.descriptionText}>
            by clicking continue you must agree to near labs{' '}
            <Text style={styles.highlight}>Terms & Conditions</Text> ans{' '}
            <Text style={styles.highlight}>Privacu Policy</Text>
          </Text>
          <View style={styles.seperator} />
          <Text style={styles.alreadyText}>Already have Near Account?</Text>
          <View style={styles.center}>
            <Button title="Login with NEAR" />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default NEARAccount;
