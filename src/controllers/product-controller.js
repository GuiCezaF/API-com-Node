"use strict";

const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = (req, res, next) => {
  Product.find({ active: true }, "title price slug")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getBySlug = (req, res, next) => {
  Product.findOne(
    {
      slug: req.params.slug,
      active: true,
    },
    "title price slug tags description"
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  Product.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getByTag = (req, res, next) => {
  Product.find(
    {
      tags: req.params.tag,
      active: true,
    },
    "title price slug tags description"
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
  let product = new Product(req.body);
  product
    .save()
    .then((x) => {
      res.status(201).send({ message: "Produto cadastrado com sucesso!" });
    })
    .catch((e) => {
      res
        .status(400)
        .send({ message: "Falha ao cadastrar o produto", data: e });
    });
};
exports.put = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      slug: req.body.slug,
    },
  })
    .then((x) => {
      res.status(200).send({
        messege: "Produto Atualizado com sucesso! ",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Erro ao Atualizar o produto",
        data: e,
      });
    });
};
exports.delete = (req, res, next) => {
  Product.findOneAndRemove(req.body.id)
    .then(x => {
      res.status(200).send({
        messege: "Produto removido com sucesso!",
      });
    })
    .catch(e => {
      res.status(400).send({
        message: "Erro ao remover o produto",
        data: e
      });
    });
};
