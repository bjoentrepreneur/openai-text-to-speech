const { generateSpeech } = require("./services/textToSpeechService");
const voices = require("./config/openaiVoices");

// Extract arguments from Command Line
function parseCommandLineArguments() {
  const args = process.argv.slice(2);
  const argsMap = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = args[i + 1];
      if (value && !value.startsWith("--")) {
        argsMap[key] = value;
        i++; // Skip the next item as it's already used as a value
      } else {
        argsMap[key] = null; // Set null for parameters with empty values
      }
    }
  }

  return argsMap;
}

// Checks if voice is available on OpenAI
function isValidVoice(voice) {
  return voices.voices.includes(voice.toLowerCase());
}

async function main() {
  try {
    const args = parseCommandLineArguments();

    if (!args.text || args.text === null) {
      throw new Error(
        "No text provided or text is empty. Please provide text using --text argument."
      );
    }

    const text = args.text;
    let voice = args.voice ? args.voice.toLowerCase() : "nova"; // Set default voice to 'nova'

    // Validate the voice parameter only if it's provided
    if (args.voice !== undefined && !isValidVoice(voice)) {
      throw new Error(
        `Invalid voice '${voice}'. Available voices are: ${voices.voices.join(
          ", "
        )}`
      );
    }

    const speechFile = await generateSpeech(text, voice);
    console.log(`Speech file created at: ${speechFile}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
