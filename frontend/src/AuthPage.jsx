// Importing the axios library for making HTTP requests
import axios from 'axios';

// Defining the AuthPage component, which takes props as an argument
const AuthPage = (props) => {
    // Defining the onSubmit function to handle form submission
    const onSubmit = (e) => {
        // Preventing the default form submission behavior
        e.preventDefault();

        // Extracting the value from the first form element (username input)
        const { value } = e.target[0];

        // Making a POST request to the authentication endpoint with the username
        axios.post('http://localhost:3001/authenticate', {
            username: value
        })
        .then(response => {
            // On successful authentication, call the onAuth prop with the response data and the username
            props.onAuth({ ...response.data, secret: value });
        })
        .catch(error => {
            // Logging any errors that occur during the request
            console.log('Error found', error);
        });
    };

    // Returning the JSX for rendering the authentication form
    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Lets Chat 🤖</div>
                <div className="form-subtitle">Set a username to get started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">OPT-IN</button>
                </div>
            </form>
        </div>
    );
};

// Exporting the AuthPage component as the default export
export default AuthPage;
