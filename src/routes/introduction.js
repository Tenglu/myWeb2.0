import React, {Component} from 'react';
import {connect} from 'dva';

class introduction extends Component{
    render(){
        <div>
            <h1>Introduction Page</h1>
        </div>
    }
}

introduction.prototype={}

export default connect()(introduction)