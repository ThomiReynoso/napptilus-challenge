export const setToLocalstorage = (key, value, timeToExpiry = null) => {
  const item = {
    value: JSON.stringify(value),
    ...(timeToExpiry && { expiry: Date.now() + timeToExpiry }),
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getFromLocalstorage = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = Date.now();

  if (now > item?.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return JSON.parse(item.value);
};
