export class SortFieldValue {
  public field: string;

  constructor(field: string) {
    this.field = field
  }

  static DATE(exitDate: string): number {
    return Date.parse(exitDate);
  }

  static LIKes(exitLikes: string): number {
    return +exitLikes;
  }
}
