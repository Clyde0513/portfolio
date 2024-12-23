// vite.config.js
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';


export default defineConfig({
  plugins: [Vue()],
  publicPath: process.env.BASE_URL
});

module.exports = {
  publicPath: process.env.BASE_URL
}
