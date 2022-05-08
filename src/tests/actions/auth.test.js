import { login, logout } from "./../../actions/auth";

test("should generate login action obj", () => {
  const uid = "123";
  const action = login(uid);
  expect(action).toEqual({ type: "LOGIN", uid });
});

test("should generate logout action obj", () => {
  const action = logout();
  expect(action).toEqual({ type: "LOGOUT" });
});
