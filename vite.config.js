import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
	root: path.resolve(__dirname, 'src'),
	build: {
		outDir: '../dist',
	},
	server: {
		port: 5174,
	},
	base: '/proyecto-final-desarrollo-web/',
});