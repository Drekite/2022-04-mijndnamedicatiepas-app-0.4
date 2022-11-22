test(
    'Testing if parsing works', () =>
    {
        const { parsingVarda } = require("../components/Parsing");
        let { vardaString, testParsedVarda } = require("./assets/vardaString");
        vardaString = new String(vardaString);

        expect(parsingVarda(vardaString)).toEqual(testParsedVarda);
    }
  );