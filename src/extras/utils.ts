type ObjectOf<T> = { [key: string]: T };

export function toQueryString(paramsObject: ObjectOf<string>) {
  return Object.keys(paramsObject)
    .map(
      key =>
        `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`
    )
    .join("&");
}

export function randomString(length: number = 32) {
  var out = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++) {
    out += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return out;
}

export function humanizeNumber(number?: number): string {
  if (!number) {
    return "0";
  }

  switch (true) {
    case number > 999999999:
      return (number / 1000000000).toFixed(1).toString() + "B";
    case number > 999999:
      return (number / 1000000).toFixed(1).toString() + "M";
    case number > 999:
      return (number / 1000).toFixed(1).toString() + "K";
    default:
      return number.toString();
  }
}
