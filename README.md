# Text-to-Speech Generator

## Description

This project utilizes OpenAI's text-to-speech capabilities to convert text into speech. It's designed to create audio files from provided text, using OpenAI's advanced voice models. The generated audio files are stored in a dedicated `outputs` directory, with the file names reflecting the input text.

## Features

- Text-to-speech conversion using OpenAI's API.
- Dynamic naming of output files based on input text.
- Output file name truncation for texts longer than 60 characters, with spaces replaced by underscores.

## Prerequisites

- Node.js
- OpenAI API Key

## Installation

1. Clone the repository:
   git clone [repository URL]
2. Navigate to the project directory:
   cd your_project
3. Install the necessary dependencies:
   npm install

## Configuration

1. Create a `.env` file in the root directory.
2. Add your OpenAI API key to the `.env` file:
   OPENAI_API_KEY=Your-API-Key-Here

## Usage

1. Run the application: `node src/index.js`
2. Check the `outputs` folder for the generated audio file.

## Project Structure
```
your_project/
│
├── src/
│ ├── config/
│ │ └── openaiConfig.js
│ ├── services/
│ │ └── textToSpeechService.js
│ ├── utils/
│ └── index.js
│
├── outputs/
├── .env
├── .gitignore
├── package.json
├── README.md
```
## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [Issues](https://github.com/bjoentrepreneur/openai-text-to-speech/issues) if you want to contribute.

## License

MIT

## Contact

[Björn](https://github.com/bjoentrepreneur)
