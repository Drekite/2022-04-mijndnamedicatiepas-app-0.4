/**
  * StoreMaster.test.js
  * Contributors: Sybe van Benthum, Lucas van Osenbruggen
  * Description: Tests to test saving a string securely in storage
  */
import {GetEncryptedString, SaveStringAndKey} from "../../components/safeStorage/StoreMaster"

const storage = {}
jest.mock('expo-file-system', () => ({
  documentDirectory: "dir/",
  deleteAsync: async function deleteAsync (key) {
    if (key in storage)
      delete storage[key]
    else
      throw ReferenceError("Key doesn't exist")
   },
   readAsStringAsync: async function readAsStringAsync (key) {
    if (storage[key] === null || storage[key] === undefined) {
      throw ReferenceError("Store key doesn't exist")
    }
    return storage[key]
  },
  writeAsStringAsync: async function writeAsStringAsync (key, value) {
    storage[key] = value
   }
}))

test('Full test: encrypt, store, get and decrypt', async () => {
  const STRING = "Data";
  const STORAGENAME = "normalStorageKey";
  const KEYNAME = "secStoreKey";
  await SaveStringAndKey(STRING, KEYNAME, STORAGENAME, 2);
  expect(await GetEncryptedString(KEYNAME, STORAGENAME)).toEqual(STRING);
});

test('Try to call GetEncryptedString with wrong typed arguments', async () => {
  let storageName = 1;
  let keyName = "mykey";
  await expect(async () => {
    await GetEncryptedString(keyName, storageName);
  }).rejects.toThrow(TypeError);
  storageName = "mydata";
  keyName = 1;
  await expect(async () => {
    await GetEncryptedString(keyName, storageName);
  }).rejects.toThrow(TypeError);
});

test('Try to call GetEncryptedString with wrong valued arguments', async () => {
  const STORAGENAME = "Idontexist";
  const KEYNAME = "meneither";
  await expect(async () => {
    await GetEncryptedString(KEYNAME, STORAGENAME)
  }).rejects.toThrow(ReferenceError);
});

test('Try to call SaveStringAndKey with empty storage key', async () =>
{
  const STRING = "Data";
  const KEY1 = "key1";
  const KEY2 = "";
  await expect(async () => {
    await SaveStringAndKey(STRING, KEY1, KEY2, 2)
  }).rejects.toThrow(Error);
})

test('Try to call SaveStringAndKey with wrong valued argument', async () =>
{
  const STRING = 1;
  const KEY1 = "key1";
  const KEY2 = "key2";
  await expect(async () => {
    await SaveStringAndKey(STRING, KEY1, KEY2, 2)
  }).rejects.toThrow(TypeError);
})
