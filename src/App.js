import React, { Fragment } from 'react';
import Posts from "./PostsComponents";
class App extends Posts{
  render(){
    return (<Fragment>
      <Posts />
    </Fragment>)
  }
}
export default App;
