import styled from "styled-components";
import Loop from "/icon-search.svg";
import { useState } from "react";
import axios from "axios";
import { UserData } from "../../interface";
interface SearchProps {
	theme: any;
	setUserData: React.Dispatch<React.SetStateAction<UserData>>;
	setHasError: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SearchComponent({
	theme,
	setUserData,
	setHasError,
}: SearchProps) {
	const [userName, setUserName] = useState("");
	const [error, setError] = useState(false);
	const getUser = async () => {
		try {
			const user = await axios.get(`https://api.github.com/users/${userName}`);
			setUserData(user.data);
			setHasError(false);
			setError(false);
		} catch (error) {
			console.log(error);
			setHasError(true);
			setError(true);
		}
	};
	return (
		<SearchContainer>
			<IconSearch src={Loop} />
			<SearchInput
				theme={theme}
				type="text"
				placeholder="Search GitHub username…"
				onChange={(event) => setUserName(event.target.value)}
			/>
			{error && <ErrorText>No Result</ErrorText>}
			<Button onClick={getUser}>Search</Button>
		</SearchContainer>
	);
}

const SearchContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 1rem 1rem 1rem 3.2rem;
	box-shadow: 0 16px 30px -10px #4660bb33;
	border-radius: 0.8rem;
	background-color: ${({ theme }) => theme.contentBackground};
	@media (max-width: 580px) {
		padding: 0.6rem 0.6rem 0.6rem 1.6rem;
	}
`;

const IconSearch = styled.img`
	width: 2.4rem;
	height: 2.4rem;
	margin: 1.2rem 2.4rem 1.2rem 0rem;
	@media (max-width: 580px) {
		width: 1.7rem;
		height: 1.7rem;
		margin: 1rem 0.8rem 1rem 0rem;
	}
`;
const SearchInput = styled.input`
	width: 30rem;
	margin: 1.2rem 0;
	font-family: "Space Mono", monospace;
	font-size: 18px;
	font-weight: 400;
	line-height: 25px;
	letter-spacing: 0px;
	text-align: left;
	border: none;
	color: ${({ theme }) => theme.paragraph};
	background-color: transparent;

	::placeholder {
		color: ${({ theme }) => theme.paragraph};
	}
	@media (max-width: 580px) {
		margin: 1rem 0;
		width: 18rem;
		font-size: 1.3rem;
	}
`;

const Button = styled.button`
	padding: 1.2rem 2.4rem;
	background-color: #0079ff;
	font-family: "Space Mono", monospace;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0px;
	text-align: left;
	color: white;
	border-radius: 0.8rem;
	border: none;
	margin-left: auto;

	@media (max-width: 580px) {
		padding: 1.2rem 1.6rem;
		font-size: 1.4rem;
	}
`;

const ErrorText = styled.p`
	color: #f74646;
	font-family: "Space Mono", monospace;
	font-size: 15px;
	font-weight: 700;
	line-height: 22px;
	letter-spacing: 0px;
	text-align: left;
	@media (max-width: 580px) {
		font-size: 1rem;
	}
`;
