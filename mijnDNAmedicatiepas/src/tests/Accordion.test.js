const { Advices, Accordion } = require("../components/Accordion.js");
import { render, waitFor } from '@testing-library/react-native'

describe(
  "Test advices", () =>
  {
    it(
      // Run creating of component and rendering it
      'Render advices', async () =>
      {
        // Code setup for the test; read the example advice
        const data = require('./assets/AdviceExample.json')
        // check if file has been read correctly
        expect(typeof data).toBe("object")
        expect(data.length).toBeGreaterThan(0)
        // Assert
        const screen = render(<Advices advices={data}></Advices>) // Render
        await waitFor(() => screen)
      }
    ),
    it(
      // Run creating of component and rendering it
      'Render accordion', async () =>
      {
        // Code setup for the test; read the example advice
        const data = require('./assets/AdviceExample.json')
        // check if file has been read correctly
        expect(typeof data).toBe("object")
        expect(data.length).toBeGreaterThan(0)
        // Assert
        const screen = render(<Accordion title={data[0].protocol + data[0].pad} data={data[0].action}></Accordion>) // Render
        await waitFor(() => screen)
      }
    )
  }
);
