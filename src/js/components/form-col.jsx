import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



import Links from './links_busqueda'

import '../../sass/form-col.scss'



class App  extends React.Component{
   constructor(props){
       super(props)
   }
   
   
    
    
    render(){
        
        return(
            
        
                <div className="container" id="container-col">
        
                    <h1>Busqueda en catálogos</h1>
                    <form className="form-group form-inline form-row col " method="GET" action={this.props.url}  >
                        
                        
                        <input className="form-control  " type="search" id="b_busqueda" name='sb[req][]'  placeholder="BUSCAR EN CÁTALOGO: Palabras clave..." ></input>
                        <input type="hidden" ></ input>


                        <select className="form-control " name='sb[cod][]' id="list">
                        
                            <option value="">Todos los campos</option>
                            <option value="WTI">Palabras en titulo</option>
                            <option value="WSU">Tema</option>
                            <option value="WAU">Autor</option>
                            <option value="WPU">Editor</option>
                            
    
                        </select>
                        
                                             
                        <button name="btn" className="btn btn-primary " id="btn_Buscar" > Buscar</button> 
                    </form>
                   
                    
                    <Links/>
                    
        
                </div>
 
     )
   }
}

export default App