describe(
  'Testing parsing module', () => {
    test(
      'Testing if parsing works for variant varda files', () => {
        const { parsingVarda } = require('../components/Parsing')
        const { vardaVariantString, testParsedVariantVarda } = require('./assets/vardaString')

        expect(parsingVarda(vardaVariantString, 'variant')).toEqual(testParsedVariantVarda)
      }
    )
    test(
      'Testing if parsing works for coverage varda files', () => {
        const { parsingVarda } = require('../components/Parsing')
        const { vardaCoverageString, testParsedCoverageVarda } = require('./assets/vardaString')

        expect(parsingVarda(vardaCoverageString, 'coverage')).toEqual(testParsedCoverageVarda)
      }
    )

    test(
      'Testing if the checkIfRightFile works', () => {
        const { checkIfRightFile } = require('../components/Parsing')
        const varda7Columns = checkIfRightFile('varda', 7)
        const varda4Columns = checkIfRightFile('varda', 4)
        const variant4Columns = checkIfRightFile('variant', 4)
        const variant7Columns = checkIfRightFile('variant', 7)

        expect(varda7Columns).toBeTruthy
        expect(varda4Columns).toBeFalsy
        expect(variant4Columns).toBeTruthy
        expect(variant7Columns).toBeFalsy
      }
    )
  })
