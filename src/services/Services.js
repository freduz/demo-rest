class Service {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll() {
    try {
      const docs = await this.model.find();
      const count = await this.model.count();
      return {
        error: false,
        statusCode: 200,
        count,
        data: docs,
      };
    } catch (err) {
      return {
        error: true,
        statusCode: 500,
        errors: err,
      };
    }
  }

  async getOne(docId) {
    try {
      const doc = await this.model.findById(docId);
      return {
        error: false,
        statusCode: 200,
        data: doc,
      };
    } catch (err) {
      return {
        error: true,
        statusCode: 500,
        errors: err,
      };
    }
  }

  async insert(data) {
    try {
      const doc = await this.model.create(data);
      return {
        error: false,
        statusCode: 201,
        data: doc,
      };
    } catch (err) {
      return {
        error: true,
        statusCode: 500,
        errors: err,
      };
    }
  }

  async update(id, data) {
    try {
      const doc = await this.model.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });
      return {
        error: false,
        statusCode: 200,
        data: doc,
      };
    } catch (err) {
      return {
        error: true,
        statusCode: 500,
        errors: err,
      };
    }
  }

  async delete(id) {
    try {
      const doc = await this.model.findByIdAndDelete(id);
      if (!doc) {
        return {
          error: true,
          statusCode: 404,
          message: 'item not found',
        };
      }

      return {
        error: false,
        deleted: true,
        statusCode: 204,
        doc,
      };
    } catch (err) {
      return {
        error: true,
        statusCode: 500,
        errors: err,
      };
    }
  }
}

export default Service;
