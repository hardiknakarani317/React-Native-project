import {StyleSheet} from 'react-native';
import {
  BLACK,
  BLUE1,
  GREY10,
  GREY6,
  GREY7,
  GREY8,
  GREY9,
  WHITE,
} from '../../constants/colors';
import {statusBarHeight} from '../../helper/utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoBackground: {
    backgroundColor: BLACK,
    paddingBottom: 9,
  },
  backgroundImage: {
    height: 350,
    width: '100%',
    left: '-10%',
  },
  overContainer: {
    position: 'absolute',
    backgroundColor: WHITE,
    marginTop: statusBarHeight + 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '100%',
  },
  mainConatiner: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerText: {
    color: BLACK,
    fontSize: 21,
    fontWeight: '600',
    textAlign: 'center',
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    backgroundColor: GREY6,
    padding: 5,
    borderRadius: 50,
  },
  closeIcon: {
    color: GREY8,
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: GREY10,
    borderRadius: 10,
  },
  inputText: {
    color: GREY8,
    fontSize: 17,
  },
  searchIcon: {
    color: GREY8,
    fontSize: 20,
    marginRight: 8,
  },
  importBtn: {
    color: BLUE1,
    fontSize: 17,
    marginLeft: 15,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemTitle: {
    color: BLACK,
    fontSize: 14,
    marginLeft: 9,
  },
  itemSubtitle: {
    color: GREY9,
    fontSize: 12,
    marginLeft: 9,
  },
  checkIcon: {
    color: BLUE1,
    fontSize: 25,
  },
  unCheckIcon: {
    height: 23,
    width: 23,
    borderRadius: 23,
    backgroundColor: GREY7,
  },
  nameContainer: {
    backgroundColor: GREY10,
    height: 45,
    width: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: 'rgba(0, 0, 0, 0.55)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  listContainer: {
    height: '68%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '15%',
  },
  shareBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  shareImage: {
    height: 14,
    width: 14,
    marginLeft: 10,
    marginRight: 15,
  },
});
