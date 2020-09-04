export function decode(encodedPayload: string) {
  return JSON.parse(atob(encodedPayload.replace(/_/g, "/").replace(/-/g, "+")));
}

export function encode(payloadObj: object) {
  return btoa(JSON.stringify(payloadObj))
    .replace(/\//g, "_")
    .replace(/\+/g, "-");
}
