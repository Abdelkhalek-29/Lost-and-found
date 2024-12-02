import { readFile } from 'node:fs/promises';
import Replicate from 'replicate';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Replicate setup
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN, // Ensure to set your API token in the environment variable
});

export const predict = async (req, res) => {
  try {
    const filePath = req.file.path; // Get the path of the uploaded file
    const data = (await readFile(filePath)).toString('base64');
    const image = `data:application/octet-stream;base64,${data}`;
    const targetAge = req.body.target_age || 'default';

    const input = {
      image: image,
      target_age: targetAge,
    };

    const output = await replicate.run(
      'yuval-alaluf/sam:9222a21c181b707209ef12b5e0d7e94c994b58f01c7b2fec075d2e892362f13c',
      { input }
    );

    res.status(200).json({url:output});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
