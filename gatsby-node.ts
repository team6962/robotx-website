import { Actions } from "gatsby";
import path from "path";

export const createPages = async ({ actions }: { actions: Actions }) => {
  const { createRedirect, createPage } = actions;

  createRedirect({
    fromPath: `/redirect/:id`,
    toPath: `https://www.appsheet.com/start/2d6685c4-c5b4-4177-b693-28c0f739c0f7#view=Catalog_Detail&row=:id`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true
  });

  createPage({
    path: `/redirect/*`,
    component: path.resolve('./src/templates/redirect-template.tsx'),
  });
};
