import { Dimensions } from 'react-native';

interface MockDimensions {
  width: number;
  height: number;
}

export const mockDimensions = ({ width, height }: MockDimensions) => {
  jest.resetModules();
  jest
    .spyOn(Dimensions, 'get')
    .mockReturnValue({ width, height, fontScale: 0, scale: 1 });
};
