const expect = require('expect');
const action = require('../../assets/babel/action/auth');
const actionType = require('../../assets/babel/action/auth/action-type.js');


describe('auth action creator', () => {
  it("should create an action success login", () => {
    const expected = {
      type: actionType.SUCCESS_LOGIN
    };
    expect(action.successLogin()).toEqual(expected);
  });

  it("should create an action success logout", () => {
    const expected = {
      type: actionType.SUCCESS_LOGOUT
    };
    expect(action.successLogout()).toEqual(expected);
  });

  it("should create an action failure login", () => {
    const expected = {
      type: actionType.FAILURE_LOGIN
    };
    expect(action.failureLogin()).toEqual(expected);
  });

  it("should create an action failure logout", () => {
    const expected = {
      type: actionType.FAILURE_LOGOUT
    };
    expect(action.failureLogout()).toEqual(expected);
  });
});
