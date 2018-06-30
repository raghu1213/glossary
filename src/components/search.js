import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react'
import actions from '../actions/actions'


/*style={{width:"80%",marginTop:"1rem", textAlign: "center", fontSize:"36" }*/
 //[ { key: 'angular', text: 'Angular', value: 'angular' }, { key: 'css', text: 'CSS', value: 'css' }, { key: 'design', text: 'Graphic Design', value: 'design' }, { key: 'ember', text: 'Ember', value: 'ember' }, { key: 'html', text: 'HTML', value: 'html' }, { key: 'ia', text: 'Information Architecture', value: 'ia' }, { key: 'javascript', text: 'Javascript', value: 'javascript' }, { key: 'mech', text: 'Mechanical Engineering', value: 'mech' }, { key: 'meteor', text: 'Meteor', value: 'meteor' }, { key: 'node', text: 'NodeJS', value: 'node' }, { key: 'plumbing', text: 'Plumbing', value: 'plumbing' }, { key: 'python', text: 'Python', value: 'python' }, { key: 'rails', text: 'Rails', value: 'rails' }, { key: 'react', text: 'React', value: 'react' }, { key: 'repair', text: 'Kitchen Repair', value: 'repair' }, { key: 'ruby', text: 'Ruby', value: 'ruby' }, { key: 'ui', text: 'UI Design', value: 'ui' }, { key: 'ux', text: 'User Experience', value: 'ux' }, ]
class Search extends React.Component{
    constructor(props){
        super(props);
     this.state = {
        options : []
     }


    }

    onTextChange(event, data){
        console.log(data);
         this.setState({options: actions.getSearchResults(data)});
    }
    getSearchResults(){
     var countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' } , { key: 'pk', value: 'pk', flag: 'pk', text: 'Pakistan' } ]
     return countryOptions;
    }
render(){
    return  (
        <div>
            <Dropdown search selection options={this.state.options} style={{width:"100%" }}
                placeholder="type in your search string" onChange={this.onTextChange}
                />
        </div>
            )
        }
}

export default Search;

