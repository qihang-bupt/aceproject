import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import sass from 'rollup-plugin-sass';
import { writeFileSync } from 'fs';
import path from 'path';

const external = ['react', 'prop-types'];
const outputTypes = [
    { file: './dist/index.js', format: 'es' },
];

const tasks = outputTypes.map(output => ({
    input: './src/index.js',
    external,
    output,
    plugins: [
        resolve(),
        filesize(),
        sass({
        output: styles => writeFileSync(path.resolve('./dist', 'index.css'), styles),
        options: {
            importer(url) {
                return url.startsWith('~') && ({
                    file: `${process.cwd()}/node_modules/${url.slice(1)}`
                })
            }
        }
    }),
        babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers'],
})
    ]
}));

export default tasks;
