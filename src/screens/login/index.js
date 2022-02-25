import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Container} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import InputBox from '../../components/TextInput';
import Button from '../../components/Button';

const Login = () => {
  const navigation = useNavigation();
  const [tab, setTab] = useState('EMAIL');

  return (
    <Container style={styles.container}>
      <View style={styles.logoBackground}>
        <Image
          source={require('../../assets/flower.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/logo_black.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <ScrollView contentContainerStyle={styles.mainConatiner}>
        <View style={styles.center}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setTab('EMAIL')}
              style={tab === 'EMAIL' ? styles.activeTab : styles.tab}>
              <Text
                style={tab === 'EMAIL' ? styles.activeTabText : styles.tabText}>
                Email
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab('PHONE')}
              style={tab === 'PHONE' ? styles.activeTab : styles.tab}>
              <Text
                style={tab === 'PHONE' ? styles.activeTabText : styles.tabText}>
                Phone
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <InputBox
          placeholder={tab === 'EMAIL' ? 'Email Address' : 'Ex. (373) 378 8383'}
        />
        <View style={styles.buttonContainer}>
          <Button title="Get Started" disabled />
        </View>
        <View style={styles.seperator} />
        <Text style={styles.smallText}>Already have Near Account?</Text>
        <InputBox placeholder="walletName.near" />
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate('NEARAccount')}
          />
        </View>
        <Text style={styles.descriptionText}>
          by clicking continue you must agree to near labs{' '}
          <Text style={styles.highlight}>Terms & Conditions</Text> ans{' '}
          <Text style={styles.highlight}>Privacu Policy</Text>
        </Text>
      </ScrollView>
    </Container>
  );
};

export default Login;
