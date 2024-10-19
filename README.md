# Setting up and Running the Language Learning Tool Project
### This is a test/dummy website

Follow these step-by-step instructions to set up and run this project locally:

1. Set up a new React project (if you haven't already):
   ```
   npx create-react-app language-learning-tool
   cd language-learning-tool
   ```

2. Install necessary dependencies:
   ```
   npm install framer-motion lucide-react recharts
   ```

3. Replace the contents of `src/App.js` with the CombinedLanguageLearningTool component code.

4. Create a new file `src/LanguageLearningInsights.js` and add the LanguageLearningInsights component code there.

5. Update `src/index.js` to use the new App component:
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import './index.css';
   import App from './App';

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

6. (Optional) If you want to use Tailwind CSS for styling:
   
   a. Install Tailwind CSS:
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   
   b. Configure your `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
   
   c. Add Tailwind directives to your `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

7. Start the development server:
   ```
   npm start
   ```