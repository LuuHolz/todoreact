import { useEffect, useState } from "react";

const UseLocalStorage = ({itemName, initialValue}: {itemName: string; initialValue: any[]}) => {

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);



  useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));

          parseItem = [];
        } else {
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem);
        }
  
          setLoading(false);
        } catch(error){
          setLoading(false);
          setError(false);
      }
    }, 1000);

  }, []);

  //ACTUALIZA ESTADO Y LOCALSTORAGE
  const saveItem = (newItem: []) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };


  return  {
    item, 
    saveItem,
    loading,
    error};
};

export { UseLocalStorage };
