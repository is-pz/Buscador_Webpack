import React from 'react'

import Form_col from './form-col'
import Form_normal from './form-normal'



class App extends React.Component{

    constructor(props){
     super(props)   
    
     
    }
    static defaultProps={
        mensaje: <p>No se pudo mostrar el formulario</p>
    }    

    state = {
        mostrar:this.props.form_inline
    }

    render(){
        return(

            <div>

                <div id="container-normal">
                    {this.state.mostrar == true  && <Form_normal />  }
                </div>
               
                <div id="container-col">
                    {this.state.mostrar == false && <Form_col/>  || this.state.mostrar == null && this.props.mensaje}
                </div>

            </div>

        )
    }
}

export default App