import styled from "styled-components";
import Moon from "/icon-moon.svg";
import Sun from "/icon-sun.svg";

interface HeaderComponentProps {
	theme: any; //
	themeToggler: () => void;
}

export default function HeaderComponent({
	theme,
	themeToggler,
}: HeaderComponentProps) {
	return (
		<HeaderContainer>
			<Logo theme={theme}>devfinder</Logo>
			<ThemeToggler onClick={themeToggler}>
				<ThemeName theme={theme}>
					{theme === "light" ? "Dark" : "Light"}
				</ThemeName>
				<ThemeLogo
					src={theme === "light" ? Moon : Sun}
					alt={theme === "light" ? "Moon icon" : "Sun icon"}
				/>
			</ThemeToggler>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.headerBackground};
	margin-bottom: 3.6rem;
`;

const Logo = styled.h3`
	font-family: "Space Mono", monospace;
	font-size: 2.6rem;
	font-weight: 700;
	line-height: 39px;
	letter-spacing: 0px;
	text-align: left;
	color: ${({ theme }) => theme.headerText};
`;

const ThemeToggler = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.6rem;
	cursor: pointer;
`;

const ThemeName = styled.h3`
	font-family: "Space Mono", monospace;
	font-size: 13px;
	font-weight: 700;
	line-height: 19px;
	letter-spacing: 2.5px;
	color: ${({ theme }) => theme.headerText};
	text-align: right;
`;

const ThemeLogo = styled.img`
	width: 2rem;
	height: 2rem;
`;
