// Importing useState hook from React library
import { useState } from "react";

// Importing the CSS file for styling
import "./App.css";

// Importing the AuthPage and ChatsPage components
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

// Defining the main App component
function App() {
  // Declaring a state variable 'user' and its setter 'setUser', initialized to undefined
  const [user, setUser] = useState(undefined);

  // Checking if the user is not authenticated (user is undefined)
  if (!user) {
    // Render the AuthPage component and pass a callback to set the user state when authentication is successful
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // If the user is authenticated, render the ChatsPage component and pass the user as a prop
    return <ChatsPage user={user} />;
  }
}

// Exporting the App component as the default export
export default App;
