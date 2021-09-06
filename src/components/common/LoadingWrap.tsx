import React, { ReactElement } from 'react';
import { InlineLoading } from 'carbon-components-react';

type LoadingWrapProps = {
	isLoading?: boolean,
	children?: ReactElement,
	message?: string
};
export const LoadingWrap = ({ isLoading = false, children, message = "Loading..." }: LoadingWrapProps): ReactElement =>
{
	return isLoading ? (
		<>
			<InlineLoading
				description={message}
				iconDescription="Active loading indicator"
				status="active"
			/>
		</>
	) : (
		<>
			{children}
		</>
	);
};
