import React,{Component} from 'react'
import PropTypes from 'prop-types';

const StripSpan=(style,text,url,symbol)=>{
    if(symbol===1){
        if(url!==""){
            return(<a href={url} title={text} style={style}>&copy; {text}</a>)
        }else{
            return(<span style={style}>&copy; {text}</span>)
        }
    }else{
        if(url!==""){
            return(<a href={url} title={text} style={style}>{text}</a>)
        }else{
            return(<span style={style}>{text}</span>)
        }
    }
}
const MultiStrip=(child,num)=>{
    var arr=[];
    for(var i=0;i<10;i++){arr.push(child)}
    return arr;
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
        let linkStyle={...this.Styles.copyrightitem};
        linkStyle.color=this.props.Color;
        linkStyle.textDecoration='none';
        return(
            <div style={{overflow:"hidden",width:"100%",display:'flex',color:this.props.Color,backgroundColor:this.props.BgColor}}>
                <div style={this.Styles.container}>
                    {MultiStrip(StripSpan(linkStyle,this.props.StripText,this.props.StripURL,1),4)}
                </div>
            </div>
        )
    }
}

CreditStrip.defaultProps={
    StripText:" STUDIOMECHA 2018",
    StripURL:"http://www.studiomecha.net",
    Color:"#C1C1C1",
    Symbol:1,
    BgColor:"#000000"
}

CreditStrip.propTypes={
    StripText:PropTypes.string,
    StripURL:PropTypes.string,    
    Color:PropTypes.string,
    BgColor:PropTypes.string,
    
    Symbol:PropTypes.number
}


export default CreditStrip