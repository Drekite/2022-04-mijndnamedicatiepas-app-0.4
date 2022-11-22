# MijnDnaMedicatiepas Mobile App
[![BCH compliance](https://bettercodehub.com/edge/badge/ludev-nl/2022-04-mijndnamedicatiepas-app?branch=main&token=bddc5f99e9d3b4ebcc10befb0482e6d5d69df3af)](https://bettercodehub.com/)
[![Node.js CI](https://github.com/ludev-nl/2022-04-mijndnamedicatiepas-app/actions/workflows/node.js.yml/badge.svg)](https://github.com/ludev-nl/2022-04-mijndnamedicatiepas-app/actions/workflows/node.js.yml)
[![Node.js CI](https://github.com/ludev-nl/2022-04-mijndnamedicatiepas-app/actions/workflows/lint.yml/badge.svg)](https://github.com/ludev-nl/2022-04-mijndnamedicatiepas-app/actions/workflows/lint.yml)

[MijnDnaMedicatiepas](https://mijndnamedicatiepas.nl) is currently the way for Pharamacogenetics (PGx) advice to be delivered to the patient. The profile, which is put on a QR code, is extracted from 200 phased variants in 12 actionable pharmacogenes.
Since the genome can consist of approximately 5 million measurable personal genetic variants, a QR code is out of bounds of storing said information.
This app, not only contains the functionality of [MijnDnaMedicatiepas](https://mijndnamedicatiepas.nl), but also stores these personal variants on the mobile device.

## Installation
To clone this repository, please use the following command in the terminal.
```bash
git clone https://username@github.com/ludev-nl/2022-04-mijndnamedicatiepas-app.git
```
Replace 'username' with your GitHub username and enter your password.

Go to the 'mijnDNAmedicatiepas' folder and install the app dependencies by using:

```bash
npm install
```

## Usage
Run the app by entering the following command from the 'mijnDNAmedicatiepas' folder:

```bash
npm start
```

Scan the generated QR-code with the Expo Go app.
Make sure you are on the same wifi network.

## Testing
Tests will be run automatically when pushing with Github actions.

To run tests locally, install the dependencies by following the installation instructions.
And then run the tests by running the following command from the 'mijnDNAmedicatiepas' folder:

```bash
npm test
```

## Contributing
This is a project from LIACS, Leiden University for the course Software Engineering. The team consists of:
- Sybe van Benthum, BSc Computer Science and Biology, s2922223@vuw.leidenuniv.nl
- Luuk Deen, BSc Computer Science and Biology, s2984679@vuw.leidenuniv.nl
- Rachel Dijkstra, BSc Artificial Intelligence and Data Science, s2882043@vuw.leidenuniv.nl
- Lex Janssens, BSc Artificial Intelligence and Data Science, s2989344@vuw.leidenuniv.nl
- Jennifer Lee, BSc Artificial Intelligence and Data Science, s2972913@vuw.leidenuniv.nl
- Lucas van Osenbruggen, BSc Computer Science and Biology, s2817489@vuw.leidenuniv.nl

## License
See [MIT](https://github.com/ludev-nl/2022-04-mijndnamedicatiepas-app/blob/main/LICENSE.md)