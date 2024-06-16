function setLocalStorage(
  key: string,
  value: number | { curIndex: number; userAnswer: { name: string; isCorrect: boolean }[] }
) {
  if (key === "data") {
    localStorage.setItem(key, JSON.stringify(value));
  } else localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key: string) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export { setLocalStorage, getLocalStorage };
