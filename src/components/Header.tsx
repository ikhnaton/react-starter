import React, { FunctionComponent } from "react";
import { Header, HeaderName } from "carbon-components-react";

type HeaderProps = {
	title: string,
	className?: string
}
export const AppHeader: FunctionComponent<HeaderProps> = ({ title, className = "title" }) =>
{
	return (
		<Header className={className}>
			<HeaderName href="#" prefix="">
				{title}
			</HeaderName>
		</Header>
	);
};
