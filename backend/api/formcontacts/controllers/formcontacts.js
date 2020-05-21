"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.formcontacts.create(data, { files });
    } else {
      entity = await strapi.services.formcontacts.create(ctx.request.body);
    }
    console.log(ctx.request.body);
    let entry = sanitizeEntity(entity, { model: strapi.models.formcontacts });

    await strapi.plugins["email"].services.email.send({
      to: "adam@adam-spice.online",
      from: "admin@strapi.io",
      subject: "New email from your website received",
      text: `
          ${entry.name} has sent the following message:

          ${entry.message}
        `,
    });

    return entry;
  },
};
