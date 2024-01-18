export default class Token {
  static set(value: string, expiresInTimestamp?: number) {
    localStorage.setItem(
      "@lyamarababys-token",
      JSON.stringify({
        value,
        expiresInTimestamp,
      })
    );
  }

  static get(redirect = true) {
    const localStorageItem = localStorage.getItem("@lyamarababys-token");

    if (!localStorageItem) {
      if (redirect) window.location.href = "/login";

      return undefined;
    }

    type TokenData = {
      expiresInTimestamp: number | null;
      value: string;
    };

    const { value, expiresInTimestamp } = JSON.parse(
      localStorageItem
    ) as TokenData;

    if (!!expiresInTimestamp && Date.now() > expiresInTimestamp) {
      window.location.href = "/login";

      return undefined;
    }

    return value;
  }
}
