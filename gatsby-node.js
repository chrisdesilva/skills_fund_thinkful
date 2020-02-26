exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "https://thinkful-da.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=da",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-dai.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=daimm",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-danw.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=danw",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-ds.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=ds",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-datascience.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=ds",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-dsi.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=dsimm",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-dsnw.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=dsnw",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-dmf.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=dm",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-ei.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=engimm",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-ft.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=engimm",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-fs.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=eng",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-fspt.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=eng",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-nw.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=engnw",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-pm.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=pm",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-pdf.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=uxui",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://thinkful-uxui.skills.fund/*",
    toPath: "https://thinkful.skills.fund/?program=uxuiimm",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "/go",
    toPath:
      "/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure",
  })
  createRedirect({ fromPath: "/accepted", toPath: "/" })
}
