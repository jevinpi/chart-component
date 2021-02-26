/**
 *----------*****--------------
 *  prettier ts,tsx以及less文件
 *----------*****--------------
 */
console.log('start--------');
const glob = require('glob');
const prettier = require('prettier');
const fs = require('fs');
const prettierConfigPath = require.resolve('../.prettierrc');

let didError = false;

let files = [];
const lessFiles = glob.sync('src/**/*.less', { ignore: ['**/node_modules/**', 'build/**', 'dist/**'] });
const tsFiles = glob.sync('src/**/*.ts*', { ignore: ['**/node_modules/**', 'build/**', 'dist/**'] });
files = files.concat(lessFiles);
files = files.concat(tsFiles);
if (!files.length) {
    return;
}

files.forEach(file => {
    const options = prettier.resolveConfig.sync(file, {
        config: prettierConfigPath,
        editorconfig: true,
    });
    const fileInfo = prettier.getFileInfo.sync(file);
    if (fileInfo.ignored) {
        return;
    }
    try {
        const input = fs.readFileSync(file, 'utf8');
        const withParserOptions = {
            ...options,
            parser: fileInfo.inferredParser,
        };
        const output = prettier.format(input, withParserOptions);
        if (output !== input) {
            fs.writeFileSync(file, output, 'utf8');
            console.log(`\x1b[34m ${file} is prettier`);
        }
    } catch (e) {
        didError = true;
    }
});

if (didError) {
    process.exit(1);
}
console.log('\x1b[32m prettier success!');
