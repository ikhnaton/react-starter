import React, { FunctionComponent } from "react";

type HeaderProps = {
	title: string,
	className?: string
}
export const Header: FunctionComponent<HeaderProps> = ({ title, className = "title" }) =>
{
	return (
		<div className={className}>
			{title}
		</div>
	);
};
