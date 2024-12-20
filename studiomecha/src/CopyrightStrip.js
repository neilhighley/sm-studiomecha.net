import React,{Component} from 'react'
import PropTypes from 'prop-types';

const StripSpan=(style,text,symbol)=>{

        if(symbol===1){
            return(<span style={style}>&copy; {text}</span>)
        }else{
           return(<span style={style}>{text}</span>)
        }

}
class CopyrightStrip extends Component{
    Styles={
        container:{              
            height:"1.4em",
            backgroundColor:"#2C4251",
            fontSize:"0.6em",
        },
        copyrightitem:{
            display:'inline-block',
            width: "200px",
        }}

    render(){
        
        return(
        
            <div style={{overflow:"hidden",width:"100%",display:'flex',color:this.props.Color}}>
                <div style={this.Styles.container}>
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}
                    {StripSpan(this.Styles.copyrightitem,this.props.StripText,1)}    
                </div>
            </div>
        )
    }
}

CopyrightStrip.defaultProps={
    StripText:" STUDIOMECHA 2025",
    Color:"#C1C1C1",
    Symbol:1
}
CopyrightStrip.propTypes={
    StripText:PropTypes.string,
    Color:PropTypes.string,
    Symbol:PropTypes.number
}


export default CopyrightStrip