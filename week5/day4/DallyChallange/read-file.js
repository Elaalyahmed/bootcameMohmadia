const fs = require('fs').promises;

async function readFileContent(filePath) {
  const data = await fs.readFile(filePath, 'utf8');
  return data;
}

module.exports = { readFileContent };
