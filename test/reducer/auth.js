const expect = require('expect');
const reducer = require('../../assets/babel/reducer/auth.js');
const actionType = require('../../assets/babel/action/auth/action-type.js');

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      isAuth: false
    });
  });

  it('should return true', () => {
    expect(
      reducer({ isAuth: false }, {
        type: actionType.SUCCESS_LOGIN
      })
    ).toEqual({
      isAuth: true
    });
  });

  it('should return false', () => {
    expect(
      reducer({ isAuth: true }, {
        type: actionType.SUCCESS_LOGOUT
      })
    ).toEqual({
      isAuth: false
    });
  });

  it('should return the same state', () => {
    expect(
      reducer({ isAuth: true }, {
        type: actionType.FAILURE_LOGIN
      })
    ).toEqual({
      isAuth: true
    });
  });

  it('should return the same state', () => {
    expect(
      reducer({ isAuth: false }, {
        type: actionType.FAILURE_LOGOUT
      })
    ).toEqual({
      isAuth: false
    });
  });

});
