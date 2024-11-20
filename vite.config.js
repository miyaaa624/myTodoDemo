import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //建立開發中的路徑
  //base:process.env.NODE_ENV => 取得node環境中的變數
  //如果目前的路徑=產品路徑,就執行倉庫的路徑
  base:process.env.NODE_ENV === 'production' ?'/myTodoDemo/' :'/',
  plugins: [react()],
})
