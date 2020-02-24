import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';


import '../../sass/form-normal.scss'
import Links from './links_busqueda'




class App  extends React.Component{
   constructor(props){
       super(props)
   }
   
   
    
    
    render(){
        
        return(
            
        
                <div className="container-normal" >
        
                    <h1>Busqueda en catálogos</h1>
                    <form className="form-group form-inline form-row col " method="GET" action={this.props.url}  >
                        
                        
                        <input className="form-control col-12 col-sm-5  " type="search" id="b_busqueda-n" name='sb[req][]'  placeholder="BUSCAR EN CÁTALOGO: Palabras clave..." ></input>
                        <input type="hidden" ></ input>


                        <select className="form-control col-12 col-sm-3" name='sb[cod][]' id="list-n">
                        
                            <option value="">Todos los campos</option>
                            <option value="WTI">Palabras en titulo</option>
                            <option value="WSU">Tema</option>
                            <option value="WAU">Autor</option>
                            <option value="WPU">Editor</option>
                            
    
                        </select>

                          
                        <button name="btn" className="btn btn-primary col-12 col-sm-3" id="btn_Buscar-n" > Buscar</button> 
                    </form>
                   
                    
                    <Links />
                    
        
                </div>
 
     )
   }
}

export default App