import fs from 'fs';
export function readFile(filpath) {
    try {
        const data = fs.readFileSync(filpath, 'utf-8');
        return data;

    } catch (error) {
        console.error(`Error reading file from disk: ${err}`);

    }
}
export function writeFile(filpath, content) {
    try {
        fs.writeFileSync(filpath, content, 'utf-8');
        console.log('File written successfully!')
    } catch (error) {
        console.error(`Error reading file from disk: ${err}`);

    }

}