export const dateFormatLong = (date: any) => {
  const longDate = new Date(date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return longDate.substring(0, 1).toUpperCase() + longDate.substring(1);
};

export const unixToDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es-ES", options);
};

export const kelvinToCelsius = (temp: number) => {
  return (temp - 273.15).toFixed(2);
};
