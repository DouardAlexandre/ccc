import React, { Component } from 'react';
import SelectSearch from 'react-select-search';


class NewInput extends Component {
   
	render(){

	    return (
            <div className="firstLine" >

              <input 
                id={ this.props.index }
                pattern="[0-9.,]+" 
                min="0" 
                ref={this.props.number}
                onChange={this.props.inputChange} 
                type="number"
                defaultValue="1" />
              <SelectSearch
                mode="input"
                options={this.props.options}
                max={10}
                multiple={false} 
                onChange={this.props.change}
                
                 />
              <div className="aff">{this.props.$+" "+this.props.devise}</div>

            </div>
	    );
	  }
}
export default NewInput;



