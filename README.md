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

```bash
git clone https://github.com/bjoentrepreneur/openai-text-to-speech.git
```

3. Navigate to the project directory:
   cd your_project
4. Install the necessary dependencies:
   npm install

## Configuration

1. Create a `.env` file in the root directory.
2. Add your OpenAI API key to the `.env` file:
   OPENAI_API_KEY=Your-API-Key-Here

## Usage

Provide the text and optionally the voice for the speech generation:

- Use the `--text` argument to specify the text you want to convert to speech. \
  For example:
  `--text "Your text here"`
- Optionally, use the `--voice` argument to specify the voice. \
  If not provided, the default voice 'nova' will be used. For example: `--voice nova` \
  Available voices include: alloy, echo, fable, onyx, nova, and shimmer.

Run the application with the provided arguments:

Example:

```bash
node src/index.js --text "Your text here" --voice nova
```

If you only want to specify the text and use the default voice, simply omit the --voice argument. For example:

```bash
node src/index.js --text "Your text here"
```

After running the application, check the `outputs` folder for the generated audio file. The file will be named based on the provided text, with spaces replaced by underscores and limited to 60 characters.

Note: If an invalid voice is specified, the application will display an error message listing the available voices. Make sure to provide a valid text input as the application will not proceed without it.

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
