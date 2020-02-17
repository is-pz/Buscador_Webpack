import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'


const urlPage = 'http://bibliotecasibe.ecosur.mx/sibe/resultados'
const form_inline = true

ReactDOM.render(<App  url={urlPage} form_inline={form_inline}/>, document.getElementById('container'))




module.hot.accept();