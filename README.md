# Client
## step 1 Install Vite

create foldeer client
```bash
npm create vite
npm install
npm run dev
```
## step 2 install tailwind
https://tailwindcss.com/docs/installation/using-vite
```bash
npm install tailwindcss @tailwindcss/vite
```

edite /vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})

```
add this code index.css
```css
@import "tailwindcss";
```

and test tailwindcss in body of index.css
```jsx
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
```
run dev
```bash
npm run dev
```
## step 3 Install React- Router
https://reactrouter.com/start/library/installation

```bash
npm i react-router
```

and update at main.jsx

```bash
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
 <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </>
)
```
## step ? install sweetalert
```bash
npm install sweetalert2
```

## step ?? react-hook-form

https://www.react-hook-form.com/get-started

```bash
npm install react-hook-form
```

## step  validation front end install zod in front end
```bash
npm install @hookform/resolvers
npm i zod
```

## step Global state with Zustand

```bash
npm install zustand
```