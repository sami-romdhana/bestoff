import { ICompilation } from "types";

export function decode(encodedPayload: string): ICompilation {
  return JSON.parse(atob(encodedPayload.replace(/_/g, "/").replace(/-/g, "+")));
}

const replacer = (_: any, val: any) => {
  return val.toFixed ? Number(val.toFixed(3)) : val;
};

export function encode(payloadObj: object): string {
  return btoa(JSON.stringify(payloadObj, replacer))
    .replace(/\//g, "_")
    .replace(/\+/g, "-");
}
