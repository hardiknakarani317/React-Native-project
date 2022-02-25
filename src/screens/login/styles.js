import {StyleSheet} from 'react-native';
import {
  BLACK,
  BLACK1,
  BLUE1,
  GREY3,
  GREY5,
  GREY6,
  GREY7,
  YELLOW,
} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoBackground: {
    backgroundColor: YELLOW,
    paddingBottom: 9,
  },
  backgroundImage: {
    height: 350,
    width: '100%',
    left: '-10%',
  },
  logoImage: {
    height: 28,
    width: 137,
    alignSelf: 'center',
  },
  mainConatiner: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 8,
  },
  activeTab: {
    backgroundColor: GREY6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  tab: {
    color: GREY3,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeTabText: {
    color: GREY5,
    fontSize: 14,
    fontWeight: '500',
  },
  tabText: {
    color: GREY3,
    fontSize: 14,
    fontWeight: '500',
  },
  center: {alignItems: 'center'},
  buttonContainer: {
    paddingTop: 8,
    alignItems: 'center',
  },
  seperator: {
    backgroundColor: GREY7,
    height: 1,
    marginHorizontal: 10,
    marginVertical: 30,
  },
  smallText: {
    color: BLACK,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  descriptionText: {
    color: BLACK1,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 25,
    marginTop: 8,
  },
  highlight: {
    color: BLUE1,
  },
});
