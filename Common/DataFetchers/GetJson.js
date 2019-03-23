/* eslint-disable */

import React from 'react';
import axios from 'axios';




class GetJson extends React.Component{

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

export default GetJson;
