import {StyleSheet} from 'react-native';
import {
  BLACK,
  BLUE1,
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
    paddingTop: 60,
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
  input: {
    paddingTop: 20,
  },
  center: {alignItems: 'center'},
  buttonContainer: {
    paddingTop: 33,
    alignItems: 'center',
  },
  seperator: {
    backgroundColor: GREY7,
    height: 1,
    marginHorizontal: 10,
    marginVertical: 30,
  },
  alreadyText: {
    color: BLACK,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 16,
    textAlign: 'center',
  },
  smallText: {
    color: GREY9,
    fontSize: 14,
    lineHeight: 19,
    marginBottom: 20,
  },
  descriptionText: {
    color: GREY9,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 25,
    marginTop: 21,
  },
  highlight: {
    color: BLUE1,
  },
  indicator: {
    height: 3,
    backgroundColor: BLUE1,
    width: '66%',
  },
});
