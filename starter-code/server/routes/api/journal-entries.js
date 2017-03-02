const express       = require('express');
const router        = express.Router();
const mongoose      = require('mongoose');
const Journal       = require('../../models/journal-entry');

router.get('/', (req, res, next) => {
  Journal.find({})
    .exec((err, entries) => {
      if (err) {
        return res.send(err);
      }
      return res.json(entries);
    });
});

router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  Journal.findById(req.params.id, (err, entry) => {
      if (err) {
        return res.send(err);
      }

      return res.json(entry);
    });
});

module.exports = router;
