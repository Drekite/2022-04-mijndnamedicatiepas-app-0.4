/**
  * AccessSecureStorage.test.js
  * Contributors: Sybe van Benthum, Lucas van Osenbruggen
  * Description: Tests to test saving a key to secure storage aka keychain
  */
 import {GetFromSecureStorage, SaveToSecureStorage, DeleteFromSecureStorage} from "../../components/safeStorage/AccessSecureStorage"

test('try to retrieve non existing key from secure storage', async () =>
{
  await expect(async () => {
    await GetFromSecureStorage("key2323")
  }).rejects.toThrow(ReferenceError);
})

test('try to retrieve key with wrong type from secure storage', async () =>
{
  await expect(async () => {
    await GetFromSecureStorage(1)
  }).rejects.toThrow(TypeError);
})

test('save string securely to storage, retrieve it and delete it', async () => {
  const KEYVALUE = "Data";
  const KEYNAME = "key";
  await SaveToSecureStorage(KEYNAME, KEYVALUE);
  await expect(await GetFromSecureStorage(KEYNAME)).toEqual(KEYVALUE);
  await DeleteFromSecureStorage(KEYNAME);
  await expect(async () => {
    await GetFromSecureStorage(KEYNAME)
  }).rejects.toThrow(ReferenceError);

});

test('try to delete with key with wrong type from secure storage', async () =>
{
  await expect(async () => {
    await DeleteFromSecureStorage(1)
  }).rejects.toThrow(TypeError);
})