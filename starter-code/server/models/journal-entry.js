'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JournalSchema = new mongoose.Schema({
  date: { type: Date, default: new Date() },
  title: String,
  content: String
});

module.exports = mongoose.model('Journal', JournalSchema);
