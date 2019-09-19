'use strict';

/**
 * Trip.js controller
 *
 * @description: A set of functions called "actions" for managing `Trip`.
 */

module.exports = {

  /**
   * Retrieve trip records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.trip.search(ctx.query);
    } else {
      return strapi.services.trip.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a trip record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.trip.fetch(ctx.params);
  },

  /**
   * Count trip records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.trip.count(ctx.query, populate);
  },

  /**
   * Create a/an trip record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.trip.add(ctx.request.body);
  },

  /**
   * Update a/an trip record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.trip.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an trip record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.trip.remove(ctx.params);
  }
};
