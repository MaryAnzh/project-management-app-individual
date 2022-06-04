export interface IUseRegistrationData {
  name: string,
  login: string,
  password: string,
}

export interface IUseRegistrationRespons {
  id: string,
  name: string,
  login: string
};

export interface IUseLoginData {
  login: string,
  password: string,
}

export interface IUseLoginRespons {
  token: string,
};

export interface IUserStorage {
  name: '',
  login: '',
  id: '',
  token: '',
}
