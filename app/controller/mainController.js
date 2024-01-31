const mainController = {
    notFound: (req, res) => {
      res.status(404).json('This endpoint doesn\'t exist.');
    },
  };
  
  module.exports = mainController;