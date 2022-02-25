import React from 'react';
import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';
import {Container} from 'native-base';
import styles from './styles';
import Button from '../../components/Button';

const NFTCardItem = () => {
  return (
    <View style={styles.nftItemContainer}>
      <View>
        <Image
          source={require('../../assets/nft.png')}
          style={styles.nftImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.nftTitleContainer}>
        <Text style={styles.nftTitle}>Vecotry Illustration</Text>
        <Text style={styles.nftSubTitle}>#17372</Text>
      </View>
    </View>
  );
};

const Home = () => {
  const renderNFTItem = () => {
    return <NFTCardItem />;
  };

  return (
    <Container style={styles.container}>
      <SafeAreaView>
        <View style={styles.center}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/user.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <Text>john.near</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.cardBackground}>
            <Image
              source={require('../../assets/background2.png')}
              style={styles.backgroundImage}
              resizeMode="contain"
            />
            <View style={styles.cardContainer}>
              <Text style={styles.cardText}>
                Start Creating{'\n'}your <Text style={styles.bold}>NFTs</Text>
                {'\n'}Today
              </Text>
              <View style={styles.btnContainer}>
                <Button title="Create an NFT" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.blockContainer}>
            <View style={styles.content}>
              <Text style={styles.containerTitle}>My NFTs</Text>
            </View>
            <Text style={styles.seeAllBtn}>See All</Text>
          </View>
        </View>
        <FlatList
          data={[1, 2, 3]}
          renderItem={renderNFTItem}
          keyExtractor={(_, i) => `${i}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.nftList}
        />
        <View style={styles.contentContainer}>
          <View style={styles.blockContainer}>
            <View style={styles.content}>
              <Text style={styles.containerTitle}>Recent Transactions</Text>
            </View>
            <Text style={styles.seeAllBtn}>See All</Text>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default Home;
