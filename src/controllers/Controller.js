class Controller {
  constructor(service) {
    this.service = service;
    this.insert = this.insert.bind(this);
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async insert(req, res) {
    if (req.file) req.body.userImage = req.file.filename;
    const response = await this.service.insert(req.body);

    res.status(response.statusCode).send(response);
  }

  async getAll(req, res) {
    return res.status(200).send(await this.service.getAll());
  }

  async getOne(req, res) {
    const response = await this.service.getOne(req.params.id);
    res.status(response.statusCode).send(response);
  }

  async update(req, res) {
    const response = await this.service.update(req.params.id, req.body);
    res.status(response.statusCode).send(response);
  }

  async delete(req, res) {
    const response = await this.service.delete(req.params.id);
    res.status(response.statusCode).send(response);
  }
}

export default Controller;
