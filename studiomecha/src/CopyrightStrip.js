import React,{Component} from 'react'
import PropTypes from 'prop-types';

class CopyrightStrip extends Component{
    render(){
        Styles.copyrightitem.color=this.props.Color
        return(
            <div style={{overflow:"hidden",width:"100%",display:'flex'}}>
            <div style={Styles.container}>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 <span style={Styles.copyrightitem}>&copy; {this.props.CopyrightText} </span>
                 
                 
                </div>
            </div>
        )
    }
}

CopyrightStrip.defaultProps={
    CopyrightText:"STUDIOMECHA 2018",
    Color:"#C1C1C1"
}
CopyrightStrip.propTypes={
    CopyrightText:PropTypes.string,
    Color:PropTypes.string
}

const Styles={
    container:{              
        height:"1.2em",
        backgroundColor:"#2C4251",
        fontSize:"0.6em",
    },
    copyrightitem:{
        display:'inline-block',
        width: "200px",
    }
}

export default CopyrightStrip