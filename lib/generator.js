'use strict';

const pagination = require('hexo-pagination');

module.exports = function(locals) {
  const config = this.config;
  const posts = locals.posts
                .sort(config.index_generator.order_by)
                .filter(post => post.hide !== true);
  
  posts.data = posts.data.sort((a, b) => ((b.sticky || 0) + (b.top || 0)) - ((a.sticky || 0) + (a.top || 0)));

  const paginationDir = config.index_generator.pagination_dir || config.pagination_dir || 'page';
  const path = config.index_generator.path || '';

  return pagination(path, posts, {
    perPage: config.index_generator.per_page,
    layout: config.index_generator.layout || ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
