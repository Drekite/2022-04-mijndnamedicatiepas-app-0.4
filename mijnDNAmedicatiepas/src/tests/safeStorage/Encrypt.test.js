/**
  * Encrypt.test.js
  * Contributors: Sybe van Benthum, Lucas van Osenbruggen
  * Description: Tests to test Encryption functions
  */
 import {GenerateKey, Encrypt, Decrypt} from "../../components/safeStorage/Encrypt"

test('GenerateKey print', async () => {
    const KEY = await GenerateKey();
    expect(KEY.length).toBeGreaterThan(0);
 });

 test('Encrypt and Decrypt data',  async () => {
    const DATA = 'Data';
    const KEY = '1234567812345678';
    const ENCRYPTEDSTRING = await Encrypt(DATA, KEY);
    const DECRYPTEDSTRING = await Decrypt(ENCRYPTEDSTRING, KEY);
    expect(DECRYPTEDSTRING).toEqual(DATA);
  });

test('Try to decrypt data of wrong type', async () => {
  const ENCRYPTEDSTRING = 1;
  const KEY = '1234567812345678';
  await expect(async () => {
     await Decrypt(ENCRYPTEDSTRING, KEY);
  }).rejects.toThrow(TypeError);
});