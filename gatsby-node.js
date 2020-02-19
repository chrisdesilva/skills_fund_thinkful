exports.createPages = ({ graphql, actions }) => {
	const { createPage, createRedirect } = actions;

	createRedirect({
		fromPath: 'https://thinkful-da.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-dai.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-danw.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-ds.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-dsi.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-dsnw.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-dmf.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-ei.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-fs.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-nw.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-pm.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-pdf.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: 'https://thinkful-uxui.skills.fund/*',
		toPath: 'https://thinkful.skills.fund/:splat',
		isPermanent: true,
		force: true
	});
	createRedirect({
		fromPath: '/go',
		toPath: '/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure'
	});
	createRedirect({ fromPath: '/accepted', toPath: '/' });
};
