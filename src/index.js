const { generateSpeech } = require("./services/textToSpeechService");

async function main() {
  const speechFile = await generateSpeech(
    "My mind is calm... my body is relaxed."
  );
  console.log(`Speech file created at: ${speechFile}`);
}

main();
