'use strict';

/**
 * Poi.js controller
 *
 * @description: A set of functions called "actions" for managing `Poi`.
 */

module.exports = {

  /**
   * Retrieve poi records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.poi.search(ctx.query);
    } else {
      return strapi.services.poi.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a poi record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.poi.fetch(ctx.params);
  },

  /**
   * Count poi records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.poi.count(ctx.query, populate);
  },

  /**
   * Create a/an poi record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.poi.add(ctx.request.body);
  },

  /**
   * Update a/an poi record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.poi.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an poi record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.poi.remove(ctx.params);
  }
};
