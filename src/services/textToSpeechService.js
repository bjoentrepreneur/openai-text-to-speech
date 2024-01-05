const openai = require("../config/openaiConfig");
const fs = require("fs-extra");
const path = require("path");

const outputDirectory = path.resolve(__dirname, "..", "outputs");

fs.ensureDirSync(outputDirectory);

function formatFilename(text) {
  let formattedText = text.replace(/\s+/g, "_").substring(0, 60);
  return `${formattedText}.mp3`;
}

async function generateSpeech(text) {
  const filename = formatFilename(text);
  const speechFile = path.join(outputDirectory, filename);
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "nova",
    input: text,
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
  return speechFile;
}

module.exports = { generateSpeech };