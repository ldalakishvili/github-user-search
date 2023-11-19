import styled from "styled-components";
import Location from "/icon-location.svg";
import Twitter from "/icon-twitter.svg";
import Website from "/icon-website.svg";
import Company from "/icon-company.svg";
import { UserData } from "../../interface";

interface UserProps {
	theme: any;
	userData: UserData;
	hasError: boolean;
}

const formatDate = (dateString: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function UserInfo({ theme, userData, hasError }: UserProps) {
	console.log(hasError);
	if (hasError) {
		return null;
	} else
		return (
			<InfoContainer theme={theme}>
				<Avatar src={userData.avatar_url} />
				<Info>
					<InfoHeader>
						<Name theme={theme}>{userData.name}</Name>
						<DateJoinded>
							{" "}
							Joined {formatDate(userData.created_at)}{" "}
						</DateJoinded>
					</InfoHeader>
					<Login>@{userData.login}</Login>
					<Bio>{userData.bio || "This profile has no bio"}</Bio>
					<Numbers>
						<NumberBox>
							<NumberName>Repos</NumberName>
							<NumberValue>{userData.public_repos}</NumberValue>
						</NumberBox>
						<NumberBox>
							<NumberName>Followers</NumberName>
							<NumberValue>{userData.followers}</NumberValue>
						</NumberBox>

						<NumberBox>
							<NumberName>Following</NumberName>

							<NumberValue>{userData.following}</NumberValue>
						</NumberBox>
					</Numbers>
					<AdditionalBox>
						<AdditionalInfo>
							<AdditionalLogo src={Location} />
							<AdditionalName>
								{" "}
								{userData.location || "Not specified"}
							</AdditionalName>
						</AdditionalInfo>
						<AdditionalInfo>
							<AdditionalLogo src={Twitter} />
							<AdditionalName>
								{userData.twitter_username || "Not specified"}
							</AdditionalName>
						</AdditionalInfo>
					</AdditionalBox>
					<AdditionalBox>
						<AdditionalInfo>
							<AdditionalLogo src={Website} />
							<AdditionalName>
								{userData.html_url || "Not specified"}
							</AdditionalName>
						</AdditionalInfo>
						<AdditionalInfo>
							<AdditionalLogo src={Company} />
							<AdditionalName>
								{" "}
								{userData.company || "Not specified"}
							</AdditionalName>
						</AdditionalInfo>
					</AdditionalBox>
				</Info>
			</InfoContainer>
		);
}

const InfoContainer = styled.div`
	width: 100%;
	padding: 4.8rem;
	display: flex;
	align-items: flex-start;
	gap: 3.7rem;
	justify-content: center;
	box-shadow: 0 16px 30px -10px #4660bb33;
	border-radius: 0.8rem;
	background-color: ${({ theme }) => theme.contentBackground};

	@media (max-width: 768px) {
		padding: 4rem;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
	}
`;
const Avatar = styled.img`
	width: 11.7rem;
	height: 11.7rem;
	border-radius: 50%;
	@media (max-width: 768px) {
	}
`;
const Info = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 768px) {
		align-items: center;
	}
`;
const InfoHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const Name = styled.h2`
	font-family: "Space Mono", monospace;
	font-size: 26px;
	font-weight: 700;
	line-height: 39px;
	letter-spacing: 0px;
	text-align: left;
	color: ${({ theme }) => theme.heading};

	@media (max-width: 580px) {
		font-size: 16px;
	}
`;
const DateJoinded = styled.p`
	font-family: "Space Mono", monospace;
	font-size: 15px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: 0px;
	text-align: right;
	color: ${({ theme }) => theme.paragpraph};
	@media (max-width: 580px) {
		font-size: 12px;
	}
`;
const Login = styled.p`
	font-family: "Space Mono", monospace;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0px;
	text-align: left;
	color: #0079ff;
	margin: 0.2rem 0 2rem;
	@media (max-width: 580px) {
		font-size: 12px;
	}
`;
const Bio = styled.p`
	font-family: "Space Mono", monospace;
	font-size: 15px;
	font-weight: 400;
	line-height: 25px;
	letter-spacing: 0px;
	text-align: left;
	color: ${({ theme }) => theme.paragpraph};
	margin-bottom: 3.2rem;
	@media (max-width: 580px) {
		font-size: 12px;
	}
`;
const Numbers = styled.div`
	display: flex;
	padding: 1.5rem 3.2rem;
	align-items: center;
	justify-content: left;
	gap: 9rem;
	margin-bottom: 3.7rem;
	@media (max-width: 768px) {
		padding: 0 3.2rem;
	}
	@media (max-width: 580px) {
		width: 100%;
		gap: 0;
		justify-content: space-around;
		padding: 0;
	}
`;
const NumberBox = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 580px) {
		width: 100%;
		align-items: center;
	}
`;
const NumberName = styled.p`
	font-family: "Space Mono", monospace;
	font-size: 13px;
	font-weight: 400;
	line-height: 19px;
	letter-spacing: 0px;
	text-align: left;
	color: ${({ theme }) => theme.paragpraph};
`;
const NumberValue = styled.h2`
	font-family: "Space Mono", monospace;
	font-size: 22px;
	font-weight: 700;
	line-height: 33px;
	letter-spacing: 0px;
	text-align: left;
	color: ${({ theme }) => theme.heading};
`;
const AdditionalBox = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 2rem;
	@media (max-width: 768px) {
		margin: 0 auto 2rem;

		flex-direction: column;
		align-items: flex-start;
		white-space: nowrap;
		gap: 1.6rem;
	}
`;
const AdditionalInfo = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
	width: 50%;
`;
const AdditionalLogo = styled.img`
	width: 2rem;
	height: 2rem;
`;
const AdditionalName = styled.p`
	font-family: "Space Mono", monospace;
	color: ${({ theme }) => theme.paragpraph};
	font-size: 15px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: 0px;
	overflow-x: hidden;
	text-align: left;
	@media (max-width: 580px) {
		font-size: 12px;
	}
`;
