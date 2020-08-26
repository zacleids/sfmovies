'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {
    const movie = await new Movie().save(payload);

    return await new Movie({ id: movie.id }).fetch();
};
