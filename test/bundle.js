(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

module.exports = require('./lib/miccon')
},{"./lib/miccon":2}],2:[function(require,module,exports){
class Miccon {
  constructor() {
    this._base = {}
  }

  static date() {
    document.write(Date())
  }

  static table(id, options = { class: '' }) {
    let _class = ''

    if (options.class !== '') {
      _class = `class="${options.class}"`
    }

    let table_html =
      `
      <table ${_class}>
        <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
        </tr>
        <tr>
          <td>Data 1.1</td>
          <td>Data 1.2</td>
          <td>Data 1.3</td>
        </tr>
        <tr>
          <td>Data 2.1</td>
          <td>Data 2.2</td>
          <td>Data 2.3</td>
        </tr>
      </table>
      `

    let el = document.getElementById(id)
    console.log(el)
    if (el) el.innerHTML = table_html
  }
}

exports = module.exports = Miccon

exports.props = {}
},{}],3:[function(require,module,exports){
const miccon = require('../index')

miccon.table('table1', { class: 'table' })
miccon.table('table2')

},{"../index":1}]},{},[3]);
