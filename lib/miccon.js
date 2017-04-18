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