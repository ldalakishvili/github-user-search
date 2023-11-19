import "./reset.css";
import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/globalStyles";
import { lightTheme, darkTheme } from "./Components/Themes";
import HeaderComponent from "./Components/Header/Header";
import SearchComponent from "./Components/SearchBar/Search";
import UserInfo from "./Components/UserInfo/UserInfo";
import { UserData } from "./interface";

function App() {
	const [theme, setTheme] = useState("light");
	const [userData, setUserData] = useState<UserData>({
		avatar_url: "",
		name: "",
		created_at: "",
		login: "",
		bio: "",
		public_repos: 0,
		followers: 0,
		following: 0,
		location: "",
		twitter_username: "",
		company: "",
		html_url: "",
	});
	const [hasError, setHasError] = useState(true);

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	console.log(userData);
	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<>
					<MainContainer>
						<HeaderComponent theme={theme} themeToggler={themeToggler} />
						<SearchComponent
							theme={theme}
							setUserData={setUserData}
							setHasError={setHasError}
						/>
						<UserInfo theme={theme} userData={userData} hasError={hasError} />
					</MainContainer>
					<GlobalStyles />
				</>
			</ThemeProvider>
		</>
	);
}

export default App;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 73rem;

	@media (max-width: 768px) {
		width: 57rem;
	}
	@media (max-width: 580px) {
		margin-top: 1rem;
		width: 32.7rem;
	}
`;
