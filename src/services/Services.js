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
    const doc = await this.model.findById(docId);
    return {
      error: false,
      statusCode: 200,
      data: doc,
    };
  }

  async insert(data) {
    const doc = await this.model.create(data);
    return {
      error: false,
      statusCode: 201,
      data: doc,
    };
  }

  async update(id, data) {
    const doc = await this.model.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return {
      error: false,
      statusCode: 200,
      data: doc,
    };
  }

  async delete(id) {
    const doc = await this.model.findByIdAndDelete(id);
    return {
      error: false,
      deleted: true,
      statusCode: 204,
      doc,
    };
  }
}

export default Service;
