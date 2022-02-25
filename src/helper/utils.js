import {Dimensions} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;
export const statusBarHeight = getStatusBarHeight();
export const bottomSpace = getBottomSpace();
