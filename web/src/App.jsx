import "./App.css";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/clerk-react";

/**
 * Renders the application's main page with authentication-aware UI.
 * @returns {React.ReactNode} The root application component.
 */
function App() {
	return (
		<>
			<h1>Hello World!</h1>
			<SignedOut>
				<SignInButton mode="modal" />
				<SignUpButton mode="modal" />
			</SignedOut>

			<SignedIn>
				<UserButton />
				<h1>Welcome User</h1>
			</SignedIn>
		</>
	);
}

export default App;
