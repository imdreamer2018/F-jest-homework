import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockData = {
      data: {
        msg: "mock post register success",
      },
    };
    axios.post.mockImplementation(() => Promise.resolve(mockData));
    const result = register("mockUsername", "mockPassword");
    await expect(result).resolves.toEqual({
      msg: "mock post register success",
    });
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    const result = register("mockErrorUsername", "mockPassword");
    return expect(result).rejects.toThrow("wrong username or password");
  });
});
