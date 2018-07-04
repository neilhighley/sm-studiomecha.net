import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div style={Style.footerStyle}>
            This is the fffooter stuff
            </div>
        )
    }
}

const Style={
    footerStyle:{
        backgroundColor:'#B6C648',
        width:'100%',
        alignContent:'flex-start'
    }
};

export default Footer;