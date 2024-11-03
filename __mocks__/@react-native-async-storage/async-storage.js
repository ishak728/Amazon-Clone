import { jest } from '@jest/globals';

const mockAsyncStorage  = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};



export default mockAsyncStorage;
