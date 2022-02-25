import {StyleSheet} from 'react-native';
import {
  BLACK,
  BLUE1,
  GREY11,
  GREY12,
  GREY9,
  WHITE,
} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREY11,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  cardBackground: {
    height: 183,
    width: '100%',
    backgroundColor: WHITE,
    overflow: 'hidden',
    borderRadius: 10,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    right: '-25%',
  },
  cardContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    paddingHorizontal: 21,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: GREY12,
  },
  cardText: {
    color: BLACK,
    fontSize: 27,
    lineHeight: 32,
  },
  bold: {
    fontWeight: '800',
  },
  btnContainer: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  blockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  content: {
    flex: 1,
  },
  containerTitle: {
    color: BLACK,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '700',
  },
  seeAllBtn: {
    color: BLUE1,
    fontSize: 16,
    lineHeight: 30,
  },
  center: {alignItems: 'center'},
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: GREY12,
    backgroundColor: WHITE,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 25,
  },
  profileImage: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  nftItemContainer: {
    backgroundColor: WHITE,
    borderRadius: 10,
    width: 230,
    borderWidth: 1,
    borderColor: GREY12,
    overflow: 'hidden',
    marginHorizontal: 9,
  },
  nftImage: {
    height: 140,
    width: '100%',
  },
  nftTitleContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  nftTitle: {
    color: BLACK,
    fontSize: 16,
    lineHeight: 30,
  },
  nftSubTitle: {
    color: GREY9,
    fontSize: 13,
    lineHeight: 30,
  },
  nftList: {
    paddingHorizontal: 9,
    paddingTop: 16,
  },
});
