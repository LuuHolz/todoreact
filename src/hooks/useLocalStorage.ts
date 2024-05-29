import React, { useState } from "react";

const UseLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem;

  if (!localStorageItem) {
    localStorage.getItem(itemName, JSON.stringify(initialValue));
    parseItem = [];
  } else {
    parseItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parseItem);

  //ACTUALIZA ESTADO Y LOCALSTORAGE
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return  [item, saveItem];
};

export { UseLocalStorage };
