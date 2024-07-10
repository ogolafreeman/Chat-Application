// Importing the PrettyChatWindow component from the react-chat-engine-pretty library
import { PrettyChatWindow } from "react-chat-engine-pretty";

// Defining the ChatsPage component, which takes props as an argument
const ChatsPage = (props) => {
  // Returning the JSX for rendering the chat window
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID} // Using the project ID from environment variables
        username={props.user.username} // Passing the username from props
        secret={props.user.secret} // Passing the user secret from props
      />
    </div>
  );
};

// Exporting the ChatsPage component as the default export
export default ChatsPage;
