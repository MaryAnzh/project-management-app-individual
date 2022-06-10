export interface IDevelopmentProcessCard {
  title: string,
  shortDescription: string,
  description: IDescription[],
}

export interface IDescription {
  text: string,
  code: string[],
}
