  export function itemAgeCalculated(exitDate: string): number {

    const itemDate = Date.parse(exitDate);
    const date = new Date();
    const itemAgeInMilliseconds = +date - +itemDate;
    const millisecondsInDay = 86400000;
    const itemAgeInDay = itemAgeInMilliseconds / millisecondsInDay;

    return itemAgeInDay;
  }
