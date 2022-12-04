import api from "../components/APICall"

describe(
    'Test API call', () => {
      it(
        // Description of the test
        'Call with [511,512]', async () => {
          // Code setup for the test;
          const result = await api([511,512])

          // TEST IF OUTPUT IS RIGHT
          expect(result.length).toBe(6)
        }
      );
      it('Call with invalid datatype', async () =>  {        
        await expect(api(511))
        .rejects
        .toThrow(TypeError);
        }
      );
      it('Call with invalid array', async () => {
        await expect(api([511,"a"]))
        .rejects
        .toThrow(Error);
        }
      );
      it('Call with empty array', async () => {
        // Will return empty JSON, so empty array.
        await expect(api([])).resolves.toStrictEqual([])
        }
      );
      it('Call with invalid tsitnrs', async () => {
        // Will return empty JSON, so empty array.
        await expect(api([1])).resolves.toStrictEqual([])
        }
      );
    }
  )