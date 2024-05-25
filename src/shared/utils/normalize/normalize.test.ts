import { Platform } from 'react-native';
import { scaleFontSize, scaleByWidth, scaleByHeight } from './normalize';
import { mockDimensions } from 'shared/tests/mockDimentions';

const MOCK_SIZE = 100;
const MOCK_FONT_SIZE = 16;

describe('scaling functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('scaleFontSize', () => {
    it('should scale font size based on device height for iOS', () => {
      mockDimensions({ height: 812, width: 375 });
      const scaledFontSize = scaleFontSize(MOCK_FONT_SIZE);
      expect(scaledFontSize).toBe(16); // 812/812 * 16 = 16
    });

    it('should scale font size based on device height for Android', () => {
      Platform.OS = 'android';
      mockDimensions({ height: 812, width: 375 });
      const scaledFontSize = scaleFontSize(MOCK_FONT_SIZE);
      expect(scaledFontSize).toBe(16); // (812-20)/812 * 16 = 15.6 rounded to 16
    });

    it('should scale font size correctly when in landscape mode', () => {
      mockDimensions({ height: 375, width: 812 });
      const scaledFontSize = scaleFontSize(MOCK_FONT_SIZE);
      expect(scaledFontSize).toBe(16); // 812/812 * 16 = 16
    });
  });

  describe('scaleByWidth', () => {
    it('should scale size based on device width', () => {
      mockDimensions({ height: 812, width: 375 });
      const scaledSize = scaleByWidth(MOCK_SIZE);
      expect(scaledSize).toBe(100); // 375/375 * 100 = 100
    });

    it('should scale size correctly when in landscape mode', () => {
      mockDimensions({ height: 375, width: 812 });
      const scaledSize = scaleByWidth(MOCK_SIZE);
      expect(Number(scaledSize.toFixed(2))).toEqual(216.53); // 812/375 * 100 = 216.53
    });
  });

  describe('scaleByHeight', () => {
    it('should scale size based on device height', () => {
      mockDimensions({ height: 812, width: 375 });
      const scaledSize = scaleByHeight(MOCK_SIZE);
      expect(scaledSize).toBe(100); // 812/812 * 100 = 100
    });

    it('should scale size correctly when in landscape mode', () => {
      mockDimensions({ height: 375, width: 812 });
      const scaledSize = scaleByHeight(MOCK_SIZE);
      expect(Number(scaledSize.toFixed(2))).toBe(46.18); // 375/812 * 100 = 46.18
    });
  });
});
