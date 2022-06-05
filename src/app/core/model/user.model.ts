export interface IUser {
  id: string,
  name: string,
  login: string
}

export interface IUserRegistrationData {
  name: string,
  login: string,
  password: string,
}

export interface IUserRegistrationResponse {
  id: string,
  name: string,
  login: string
};

export interface IUserLoginData {
  login: string,
  password: string,
}

export interface IUserLoginResponse {
  token: string,
};

export interface IUserStorage {
  name: string,
  login: string,
  id: string,
  token: string,
  date: string,
}
