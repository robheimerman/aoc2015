import fs from "fs";

export const readSingleLinedFile = filePath => fs.readFileSync(filePath, 'utf8');

export const readMultiLinedFile = filePath =>
    fs.readFileSync(filePath, 'utf8')
        .split('\n')