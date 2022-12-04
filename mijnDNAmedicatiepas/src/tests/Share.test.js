describe(
  'Test generate QR code function', () =>
  {
    it(
      // Description of the test
      'Correct input returns output', () =>
      {
        // Code setup for the test;
        const share = require("../components/Share");
        const component = share.GenerateQR("Hello World");
      }
    );
    it(
      // Description of the test
      'Correct input of maximum size returns output', () =>
      {
        // Code setup for the test;
        const share = require("../components/Share");
        const component = share.GenerateQR("x".repeat(4269));
      }
    );
    it(
      // Description of the test
      'Correct input of minimum size returns output', () =>
      {
        // Code setup for the test;
        const share = require("../components/Share");
        const component = share.GenerateQR("");
      }
    );
    it(
      // Description of the test
      'Wrong type returns error', () =>
      {
        // Code setup for the test;
        const share = require("../components/Share");
        expect(() => {
          share.GenerateQR(5);
        }).toThrow(TypeError);
      }
    );
    it(
      // Description of the test
      'Wrong value returns error', () =>
      {
        // Code setup for the test;
        const share = require("../components/Share");
        expect(() => {
          share.GenerateQR("x".repeat(5000));
        }).toThrow(RangeError);
      }
    );
  }
);
