/*
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

'use strict'

const Tokenizer = require('./tokenizer')
const util = require('util')

const AggressiveTokenizer = function () {
  Tokenizer.call(this)
}

util.inherits(AggressiveTokenizer, Tokenizer)

module.exports = AggressiveTokenizer

AggressiveTokenizer.prototype.withoutEmpty = function (array) {
  return array.filter(function (a) { return a })
}

AggressiveTokenizer.prototype.clearText = function (text) {
  return text.replace(/[^a-zа-яё0-9]/gi, ' ').replace(/[\s\n]+/g, ' ').trim()
}

AggressiveTokenizer.prototype.tokenize = function (text) {
  // break a string up into an array of tokens by anything non-word
  return this.withoutEmpty(this.clearText(text).split(' '))
}
