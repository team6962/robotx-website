const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPage = async ({ actions }) => ({
    const { createRedirect } = actions

    createRedirect({
    fromPath: `/aim/:id`,
    toPath: `https://www.appsheet.com/start/2d6685c4-c5b4-4177-b693-28c0f739c0f7#view=Catalog_Detail&row=:id`,
    statusCode: 302,
  })
})