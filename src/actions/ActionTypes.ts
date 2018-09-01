/**
 * ActionTypes for Redux actions.
 */
export enum ActionTypes {
  // user profile
  GET_USER = 'hexanews/user/GET_USER',
  GET_ARTICLES = 'hexanews/article/GET_ARTICLES',
  GET_LOGIN = 'hexanews/login/GET_LOGIN',

  // register
  REGISTER_USER_REQUESTED = 'hexanews/user/REGISTER_USER_REQUESTED',
  REGISTER_USER_SUCCESS = 'hexanews/user/REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILED = 'hexanews/user/REGISTER_USER_FAILED',

  // login
  LOGIN_USER_REQUESTED = 'hexanews/user/LOGIN_USER_REQUESTED',
  LOGIN_USER_SUCCESS = 'hexanews/user/LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILED = 'hexanews/user/LOGIN_USER_FAILED',

  // change name
  CHANGE_NAME_REQUESTED = 'hexanews/user/CHANGE_NAME_REQUESTED',
  CHANGE_NAME_SUCCESS = 'hexanews/user/CHANGE_NAME_SUCCESS',
  CHANGE_NAME_FAILED = 'hexanews/user/CHANGE_NAME_FAILED',

  // article
  CREATE_ARTICLE_REQUESTED = 'hexanews/article/CREATE_ARTICLE_REQUESTED',
  CREATE_ARTICLE_SUCCESS = 'hexanews/article/CREATE_ARTICLE_SUCCESS',
  CREATE_ARTICLE_FAILED = 'hexanews/article/CREATE_ARTICLE_FAILED',

  // shared
  LOGOUT = 'hexanews/shared/LOGOUT',
}