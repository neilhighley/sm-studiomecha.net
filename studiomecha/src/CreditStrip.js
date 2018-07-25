import React,{Component} from 'react'
import PropTypes from 'prop-types';

const StripSpan=(style,text,symbol)=>{

        if(symbol===1){
            return(<span style={style}>&copy; {text}</span>)
        }else{
           return(<span style={style}>{text}</span>)
        }

}
class CreditStrip extends Component{
    Styles={
        container:{              
            height:"1.2em",
            fontSize:"0.6em",
        },
        copyrightitem:{
            display:'inline-block',
           marginRight:"50px"
        }}

    render(){
        
        return(
        
            <div style={{overflow:"hidden",width:"100%",display:'flex',color:this.props.Color,backgroundColor:this.props.BgColor}}>
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

CreditStrip.defaultProps={
    StripText:" STUDIOMECHA 2018",
    Color:"#C1C1C1",
    Symbol:1,
    BgColor:"#000000"
}
CreditStrip.propTypes={
    StripText:PropTypes.string,
    Color:PropTypes.string,
    BgColor:PropTypes.string,
    
    Symbol:PropTypes.number
}


export default CreditStrip