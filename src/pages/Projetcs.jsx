import React, { Component } from 'react'
import "../style/projects.css"
import {Link} from 'react-router-dom'
const tecnologias = {
  html: "HTML",
  css: "CSS",
  js: "Javascript",
  react: "React",
  redux: "Redux",
  context: "ContextApi",
  node: "Node.js",
  docker: "Docker",
  sql: "MySQL",
  jest: "Jest",
  rtl: "React Testing library",
  api: "Api RestFull"
}
export class Projetcs extends Component {
  render() {
    return (
      <div className='global'>
        <h1>Meus projetos</h1>
      <div className='prinDivProj'>
        <div className='cardProjetcs'>
          <h1>Lessons Learned</h1>
          <ul>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
          </ul>
          <button ><Link to="/inBuilding">Acesse o projeto</Link></button>
        </div>
        <div className='cardProjetcs'>
          <h1>Playground <br/> Functions</h1>
          <ul>
            <li>{tecnologias.js}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Arte com pixels</h1>
          <ul>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.js}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Trybewarts</h1>
          <ul>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.js}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Javascript Unit Tests</h1>
          <ul>
            <li>{tecnologias.jest}</li>
            <li>{tecnologias.js}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Zoo Functions</h1>
          <ul>
            <li>{tecnologias.js}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Shopping Cart</h1>
          <ul>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.jest}</li>
            <li>{tecnologias.js}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Solar System</h1>
          <ul>
            <li>{tecnologias.react}</li>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.js}</li>
            <li>{tecnologias.api}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Tryunfo</h1>
          <ul>
            <li>{tecnologias.react}</li>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.js}</li>
            <li>{tecnologias.api}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Trybetunes</h1>
          <ul>
          <li>{tecnologias.react}</li>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.js}</li>
            <li>{tecnologias.api}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Frontend Online Store</h1>
          <ul>
            <li>{tecnologias.react}</li>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.js}</li>
            <li>{tecnologias.api}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Testes em React</h1>
          <ul>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.react}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>TrybeWallet</h1>
          <ul>
          <li>{tecnologias.react}</li>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.js}</li>
            <li>{tecnologias.api}</li>
            <li>{tecnologias.redux}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Jogo de trivia</h1>
          <ul>
          <li>{tecnologias.react}</li>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.js}</li>
            <li>{tecnologias.api}</li>
            <li>{tecnologias.redux}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>StarWars Datatable</h1>
          <ul>
          <li>{tecnologias.react}</li>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.js}</li>
            <li>{tecnologias.api}</li>
            <li>{tecnologias.context}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>App de Receitas</h1>
          <ul>
            <li>{tecnologias.react}</li>
            <li>{tecnologias.html}</li>
            <li>{tecnologias.css}</li>
            <li>{tecnologias.rtl}</li>
            <li>{tecnologias.js}</li>
            <li>{tecnologias.api}</li>
            <li>{tecnologias.context}</li>
            <li>{tecnologias.redux}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Docker Todo-list</h1>
          <ul>
            <li>{tecnologias.docker}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>All for Online</h1>
          <ul>
            <li>{tecnologias.sql}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>One for all</h1>
          <ul>
            <li>{tecnologias.sql}</li>
          </ul>
        </div>
        <div className='cardProjetcs'>
          <h1>Talker Manager</h1>
          <ul>
            <li>{tecnologias.node}</li>
          </ul>
        </div>

      </div>
      </div>
    )
  }
}

export default Projetcs