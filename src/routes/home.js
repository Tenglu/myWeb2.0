import React, {Component} from 'react';
import {connect} from 'dva';

class home extends Component{
    render(){
        <div>
            <h1>Introduction Page</h1>
        </div>
    }
}

home.prototype={}

export default connect()(home)