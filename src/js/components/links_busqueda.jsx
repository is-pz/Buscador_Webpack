import React from 'react'




class Links extends React.Component{
   
    

    constructor(props){
        super(props)

        this.state = {
            show:false
        }

        this.handleChange = this.handleChange.bind(this);
    }


   handleChange(e){
       const {show} = this.state;
        this.setState(
            {show: !show}
        )
       
      
        
   }
    render(){    
        

        return(
            
            <div className="col-auto" id="link_busquedas">
                <label id="op">Opciones avanzadas</label>
                <input type="checkbox" id="check"  onChange={this.handleChange}></input>
                <br/>

                {this.state.show && <Link />}
                
            </div>


        )
    }

}
class Link extends React.Component{
    render(){
        return(

            <div>
                <a href="#" id="b_Avanzada" >Búsqueda avanzada</a>
                <span id="barra">|</span>
                <a href="#" id="b_Autoridad" >Búsqueda de autoridad</a>
            </div>

        )
    }
}


export default Links