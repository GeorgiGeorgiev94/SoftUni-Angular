const Dog = require('../models/Dog');

module.exports = {
  getDog: (req, res,next) => {
    Dog.find()
      .then((dog) => {
        res
          .status(200)
          .json({ message: 'Fetched dog successfully.', dog });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },

  createDog: (req, res, next) => {
    const dogObj = req.body;
    Dog.create(dogObj)
      .then((dog) => {
        res.status(200)
          .json({
            message: 'Dog created successfully!',
            dog
          })
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },

  editDog: (req, res,next) => {
    const dogId = req.params.id
    const dogObj = req.body;
    Dog.findById(dogId)
      .then((dog) => {
        dog.name = dogObj.name
        dog.imageUrl = dogObj.imageUrl
        dog.breed = dogObj.breed
        dog.dogAge = dogObj.dogAge
        dog.description = dogObj.description
        dog.size = dogObj.size
        dog.price = dogObj.price

        dog
          .save()
          .then(editedDog => {
            res.status(200)
              .json({
                message: 'Dog edited successfully!',
                dog: editedDog
              })
          })
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },

  detailsDog: (req, res,next) => {
    const dogId = req.params.id
    Dog.findById(dogId)
      .then((dog) => {
        res
          .status(200)
          .json({ message: 'Fetched dog successfully.', dog });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },

  deleteDog: (req, res,next) => {
    const dogId = req.params.id
    Dog.findById(dogId)
      .then((dog) => {
        dog.remove()
          .then(()=> {
            return res.status(200)
              .json({
                message: 'Dog deleted successfully!'
              })
          })
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  }
}