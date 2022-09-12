const fs = require('fs').promises;

const filename = 'src/file.json';

const readContent = async () => {
    const file = await fs.readFile(filename, 'utf8');
    return JSON.parse(file);
};

const writeActivities = async (file) => {
    const data = await readContent();
    data.activities.push(file);
    const content = await fs.writeFile(filename, JSON.stringify(data));
    return content;
};

const writePersons = async (file) => {
    const data = await readContent();
    await data.persons.push(file);
    const content = await fs.writeFile(filename, JSON.stringify(data));
    return content;
};

module.exports = {
    readContent,
    writeActivities,
    writePersons,
};