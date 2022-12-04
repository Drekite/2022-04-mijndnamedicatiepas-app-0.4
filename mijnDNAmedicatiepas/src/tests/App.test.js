import App from '../../App';
// import renderer from 'react-test-renderer';
import { render, waitFor, screen} from '@testing-library/react-native';

describe(
  "Test app module", () => {
    it(
      // Description of the test
      'Renders', async () =>
      {
        // Code setup for the test;
        const app = render(<App />);
        await waitFor(() => app);
      }
    );
    it(
      // Description of the test
      'Shows import screen', async () =>
      {
        // Code setup for the test;
        const{ app } = render(<App />);
        await screen.findByText('Select Document');
      }
    );
  }
);
