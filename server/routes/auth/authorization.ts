const blueGroups = ["delex-dashboard-user"];
const blueGroupsRegex = blueGroups.map(group => new RegExp(group));

export const authorization = async (ctx: any, next: any) =>
{
	const groups: string[] = ctx.state.user.blueGroups;
	const authorized = groups.some((group: string) =>
	{
		return blueGroupsRegex.some(bgroup => (bgroup.exec(group) !== null));
	});

	if (!authorized)
	{
		ctx.throw(403, "Not Authorized to access this dashboard, please contact the DelEx Dashboard administrator.");
	}
};
