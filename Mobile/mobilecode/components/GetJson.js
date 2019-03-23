
 /* eslint-disable */

import React from 'react';
import axios from 'axios';




export default class DisplayProducts extends React.Component {



    static navigationOptions = {
      header: null,
    };

  constructor(props){
    super(props)
    this.state={
      products:[],
    }
  }
  componentDidMount(){

    console.log("ehhhehho")

    axios.get("https://github-trending-api.now.sh/developers?language=java&amp;since=weekly").then((response)=>{

      this.setState({
        products:response.data
      })

    })



  }

  render(){
  return this.props.children({
   products:this.state.products
})
}
}
