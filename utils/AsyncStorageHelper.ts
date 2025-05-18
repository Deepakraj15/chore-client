import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * utility function to store key-value pairs in async-storage
 * throws error if any
 * 
 * @param key 
 * @param value 
 */
export const storeData = async (key:string,value:any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw e;
  }
};

/**
 * utility function to store key-value(In Object) pairs in async-storage
 * throws error if any
 * 
 * @param key 
 * @param value 
 */
export const storeObjectData = async (key:string,value:any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw e;
  }
};

/**
 * utility function to reterive data using key
 * 
 * @param key 
 * @returns value of the given key
 */
export const getData = async (key:string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
     return value;
    }
  } catch (e) {
    throw e;
  }
};

/**
 * utility function to reterive data (object) using key
 * 
 * @param key 
 * @returns object for the given key
 */
export const getObjectData = async (key:string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw e;
  }
};