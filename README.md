# React Counter App - Learning Guide

A beginner-friendly React learning project that demonstrates fundamental React concepts through a practical Counter application. This project is built with **React 19**, **Vite**, and uses modern React patterns including hooks and custom hooks.

## 📚 Learning Outcomes

By exploring and working with this project, you'll learn:

- ✅ React component structure and JSX syntax
- ✅ React Hooks (useState)
- ✅ Custom Hooks creation and usage
- ✅ Component composition and reusability
- ✅ State management
- ✅ Event handling in React
- ✅ Conditional rendering
- ✅ Component props and passing data
- ✅ Fragment usage for grouping elements
- ✅ Build tools and development workflow with Vite

---

## 🏗️ Project Structure

```
client/
├── public/                    # Static assets
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Counter.jsx       # Main counter component (uses custom hook)
│   │   └── common/
│   │       └── Button.jsx    # Reusable button component
│   ├── hooks/                # Custom React hooks
│   │   └── useCounter.js     # Custom hook for counter logic
│   ├── assets/               # Images, fonts, etc.
│   ├── App.jsx               # Root application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Project dependencies and scripts
├── index.html                # HTML entry point
└── README.md                 # This file
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v24.0.0 or higher
- **npm** (comes with Node.js)

### 1. Installation

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install
```

### 2. Running the Development Server

```bash
# Start the Vite development server
npm run dev
```

This will start a local development server (usually at `http://localhost:5173`). The app will automatically reload when you make changes to your code.

### 3. Build for Production

```bash
# Create an optimized production build
npm run build
```

The build output will be in the `dist/` directory.

### 4. Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

### 5. Lint Code

```bash
# Check code quality with ESLint
npm run lint
```

---

## 📖 Understanding the Code

### 1. **Entry Point: `main.jsx`**

This is where React starts. It mounts the React application to the DOM.

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### 2. **Root Component: `App.jsx`**

The main component that wraps all other components.

```jsx
function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}
```

**Key Concepts:**

- Functional components (modern React standard)
- JSX syntax (HTML-like syntax in JavaScript)
- Component composition (using the `<Counter />` component)

### 3. **Custom Hook: `useCounter.js`**

This demonstrates how to create a **reusable custom hook** for state logic.

```javascript
const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  // Business logic
  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(initialValue);

  // Return object with state and functions
  return { count, increment, decrement, reset };
};
```

**Key Concepts:**

- **Custom Hooks**: Extract and reuse stateful logic
- **useState Hook**: React hook for managing component state
- **Previous State Pattern**: Using `setCount((prev) => prev + step)` ensures correct state updates
- **Default Parameters**: `initialValue = 0` provides default values

### 4. **Counter Component: `Counter.jsx`**

Uses the custom hook and demonstrates component composition.

```jsx
const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <Fragment>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <Button onClick={increment}>➕ Increment</Button>
      {count > 0 && <Button onClick={decrement}>➖ Decrement</Button>}
      <Button onClick={reset}>🔄 Reset</Button>
    </Fragment>
  );
};
```

**Key Concepts:**

- **Destructuring**: `{ count, increment, decrement, reset }` extracts values from the hook's return object
- **Fragment**: `<Fragment>` groups elements without adding extra DOM nodes (like `<>...</>`)
- **Conditional Rendering**: `{count > 0 && <Button ...>}` only renders the Decrement button when count is greater than 0
- **Event Handling**: `onClick={increment}` passes function references to handle clicks

### 5. **Button Component: `common/Button.jsx`**

A reusable button component demonstrating props.

```jsx
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};
```

**Key Concepts:**

- **Props**: `children` receives the button text, `onClick` receives the handler function
- **Component Reusability**: One button component serves multiple purposes
- **Props Destructuring**: `({ children, onClick })` extracts props directly in parameters

---

## 🎯 Core React Concepts Explained

### **1. Components**

- **Functional Components**: JavaScript functions that return JSX (modern standard)
- **Class Components**: Older approach using ES6 classes (less common now)
- **Composition**: Build complex UIs by combining simple components

### **2. JSX**

- Syntax extension that allows HTML-like code in JavaScript
- Gets compiled to `React.createElement()` calls
- Must return a single root element (or use `<Fragment>`)

### **3. Props**

- Data passed from parent to child components
- Read-only and flow downward (unidirectional data flow)
- Used for component configuration and communication

### **4. State with Hooks**

- `useState()`: Adds state to functional components
- `setState()`: Updates component state and triggers re-render
- Immutable: Never modify state directly, always use the setter function

### **5. Event Handling**

- Camel-cased attributes: `onClick`, `onChange`, `onSubmit`
- Pass function reference or inline arrow function
- Synthetic events: React's cross-browser event system

### **6. Conditional Rendering**

- Ternary operator: `condition ? <Element1 /> : <Element2 />`
- Logical AND: `condition && <Element />`
- if/else in separate render logic

### **7. Custom Hooks**

- Functions that use React Hooks to extract component logic
- Must start with `use` prefix
- Allows logic reuse across components

---

## 💡 Learning Tips

### **Try These Exercises:**

1. **Modify the Step Value**
   - Change the `useCounter(0, 1)` to `useCounter(0, 5)` to increment by 5
   - Understand how custom hook parameters work

2. **Add a New Feature**
   - Add a `double` function that multiplies count by 2
   - Add it to the hook and create a button for it

3. **Styling Practice**
   - Modify `index.css` to style the counter
   - Try adding CSS classes to components

4. **Create Another Hook**
   - Create `useToggle.js` for true/false state
   - Use it in a new component

5. **Props Exploration**
   - Add a `disabled` prop to the Button component
   - Pass different values from Counter

---

## 🔧 Technologies Used

| Technology            | Purpose                                                        |
| --------------------- | -------------------------------------------------------------- |
| **React 19**          | UI library for building components                             |
| **Vite**              | Lightning-fast build tool and dev server                       |
| **JavaScript (ES6+)** | Modern JavaScript with classes, arrow functions, destructuring |
| **JSX**               | Syntax for writing HTML-like code in JS                        |
| **ESLint**            | Code quality and consistency tool                              |

---

## 📦 Dependencies

- **react** (^19.2.4): Core React library
- **react-dom** (^19.2.4): React bindings for the DOM

### Dev Dependencies:

- **vite** (^8.0.1): Build tool
- **@vitejs/plugin-react**: Vite plugin for React
- **eslint**: Code linting
- **@types/react**: TypeScript types for React

---

## 🐛 Debugging Tips

### Browser DevTools

1. Right-click → "Inspect" to open DevTools
2. Use the **Console** tab to check for errors
3. Use the **React Developer Tools** extension (install from Chrome/Firefox)

### Common Issues

| Problem                 | Solution                                         |
| ----------------------- | ------------------------------------------------ |
| "React is not defined"  | Import React: `import { useState } from "react"` |
| Component not rendering | Check JSX syntax, ensure return statement exists |
| State not updating      | Don't mutate state directly; use setter function |
| Infinite loops          | Check dependencies in hooks (if using useEffect) |

---

## 📚 Next Steps to Deepen Learning

1. **useEffect Hook**: Side effects and component lifecycle
2. **useContext Hook**: Global state management
3. **useReducer Hook**: Complex state logic
4. **React Router**: Navigation between pages
5. **API Integration**: Fetch data from servers
6. **State Management**: Redux or Zustand
7. **Testing**: Jest and React Testing Library

---

## 📝 Useful Resources

- [Official React Documentation](https://react.dev)
- [React Hooks API Reference](https://react.dev/reference/react/hooks)
- [JSX Rules and Syntax](https://react.dev/learn/writing-markup-with-jsx)
- [Vite Documentation](https://vitejs.dev)
- [React DevTools Browser Extension](https://github.com/facebook/react-devtools)

---

## ✅ Checklist for Understanding the Project

- [ ] I understand functional components and JSX
- [ ] I know how to use the `useState` hook
- [ ] I can create and use a custom hook
- [ ] I understand props and how to pass data between components
- [ ] I know how conditional rendering works
- [ ] I can use event handlers like `onClick`
- [ ] I understand component composition
- [ ] I can run the development server and see live reload
- [ ] I can modify code and see changes immediately

---

## 🤝 Tips for Learning

- **Code-along**: Don't just read, actively type and experiment
- **Modify constantly**: Change values, add features, break things on purpose
- **Use console.log()**: Debug by logging state and props
- **Read error messages**: They're helpful guides, not failures
- **Build projects**: Apply concepts to real problems
- **Review code frequently**: Revisit your code and improve it

---

**Happy Learning! 🎉** Keep building, experimenting, and growing your React skills!
