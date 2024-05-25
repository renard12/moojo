import { Dimensions, Platform, StatusBar } from 'react-native';

const GUIDELINE_BASE_WIDTH = 375; //iphone 15
const GUIDELINE_BASE_HEIGHT = 812;

export const scaleFontSize = (fontSize: number): number => {
  const { height, width } = Dimensions.get('window');

  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : StatusBar?.currentHeight ?? 0;

  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (fontSize * deviceHeight) / GUIDELINE_BASE_HEIGHT;
  return Math.round(heightPercent);
};

export const scaleByWidth = (size: number) => {
  const { width } = Dimensions.get('window');
  return (width / GUIDELINE_BASE_WIDTH) * size;
};
export const scaleByHeight = (size: number) => {
  const { height } = Dimensions.get('window');
  return (height / GUIDELINE_BASE_HEIGHT) * size;
};
