export default {
  get: jest.fn(() => Promise.resolve({ data: { value: "mock value" } })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
