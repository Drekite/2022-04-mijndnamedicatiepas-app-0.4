/**
  * AccessStorage.test.js
  * Contributors: Sybe van Benthum, Lucas van Osenbruggen
  * Description: Tests to test saving a string to system file storage
  */

import {SaveToStorage, GetFromStorage, DeleteFromStorage} from "../../components/safeStorage/AccessStorage"
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


test('Save string to normal storage, retrieve it and delete it', async () =>
{
  const STRING = "Data";
  const STORENAME = "keyUnique";
  await SaveToStorage(STRING, STORENAME);
  expect(await GetFromStorage(STORENAME)).toEqual(STRING);
  await DeleteFromStorage(STORENAME);
  await expect(async () => {
    const NOTEXIST = await GetFromStorage(STORENAME)
  }).rejects.toThrow(ReferenceError);
})

test('Try to get value with name of wrong type', async () => {
  const NAME = 2;
  await expect(async () => {
     await GetFromStorage(NAME);
  }).rejects.toThrow(TypeError);
});

test('Try to get value with not existing name', async () => {
  const NAME = "sddfsd";
  await expect(async () => {
     await GetFromStorage(NAME);
  }).rejects.toThrow(ReferenceError);
});

test('try to delete with key with wrong type from secure storage', async () =>
{
  await expect(async () => {
    await DeleteFromStorage(1)
  }).rejects.toThrow(TypeError);
})