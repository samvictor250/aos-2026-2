const validate = (schema) => {
  return async (req, res, next) => {
    try {
      if (schema.body) {
        req.body = await schema.body.parseAsync(req.body);
      }

      if (schema.params) {
        req.params = await schema.params.parseAsync(req.params);
      }

      if (schema.query) {
        res.locals.validatedQuery =
          await schema.query.parseAsync(req.query);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validate;
