import { mockBaseQuery } from './mockRequest'; // Adjust the path as necessary
import Toast from 'react-native-toast-message';

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

describe('mockBaseQuery', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return success response and show success toast', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.6); // Ensure success case

    const result = await mockBaseQuery('data', {} as any, {} as any);

    expect(result).toEqual({ data: { message: 'Simulated Success' } });
    expect(Toast.show).toHaveBeenCalledWith({
      type: 'success',
      text1: 'Great Request!',
    });
  });

  it('should return error response and show error toast', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.4); // Ensure error case

    const result = await mockBaseQuery('data', {} as any, {} as any);

    expect(result).toEqual({
      error: { error: { message: 'Simulated Error' } },
    });
    expect(Toast.show).toHaveBeenCalledWith({
      type: 'error',
      text1: 'Reject',
    });
  });
});
