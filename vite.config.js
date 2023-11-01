import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	root: path.resolve(__dirname, 'src'),
	build: {
		outDir: '../docs',
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'src/index.html'),
				depto: path.resolve(__dirname, 'src/depto.html'),
			},
		},
	},
	server: {
		port: 5174,
	},
	base: '/proyecto-final-desarrollo-web/',
});
