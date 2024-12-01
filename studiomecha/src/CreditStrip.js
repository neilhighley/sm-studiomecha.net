import React,{Component} from 'react'
import PropTypes from 'prop-types';
import CreditItem from './libs/SiteTypes';


const keyGen=()=>{
    if(this.key===undefined)this.key=1
        this.key=this.key+1;
        return this.key;
}
const StripSpan=(style,text,url,symbol)=>{
    if(symbol===1){
        if(url!==""){
            return(<a key={keyGen()} href={url} title={text} style={style}>&copy; {text}</a>)
        }else{
            return(<span key={keyGen()} style={style}>&copy; {text}</span>)
        }
    }else{
        if(url!==""){
            return(<a key={keyGen()} href={url} title={text} style={style}>{text}</a>)
        }else{
            return(<span key={keyGen()} style={style}>{text}</span>)
        }
    }
}
const MultiStrip=(child,num)=>{
    var arr=[];
    for(var i=0;i<num;i++){arr.push(child)}
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
    GetRenderedCredits(items){
        return items.map(item=>item.HasContent?item.Content:this.GetRenderedItem(item.Text,item.URL,item.Color))
    }
    GetRenderedItem(itemText,itemURL,itemColor){
        let linkStyle={...this.Styles.copyrightitem};
        linkStyle.color=itemColor;
        linkStyle.textDecoration='none';
        return(           
            StripSpan(linkStyle,itemText,itemURL,1)
        )
    }
    RenderContent(p){
       return MultiStrip( p.Credits.length>0?
                this.GetRenderedCredits(p.Credits)
                :this.GetRenderedItem(p.StripText,p.StripURL,p.Color),4)
    }
    UniqueKey(){
        return keyGen();
    }
    render(){
        return(
        <div style={{overflow:"hidden",width:"100%",display:'flex',color:this.props.Color,backgroundColor:this.props.BgColor}} key={this.UniqueKey()}>
            <div style={this.Styles.container} key={this.UniqueKey()}>
                {this.RenderContent(this.props)}
            </div>
        </div>
        )
    }
}

CreditStrip.defaultProps={
    StripText:" CREDIT STUDIOMECHA 2025",
    StripURL:"http://www.studiomecha.net",
    Color:"#C1C1C1",
    Symbol:1,
    BgColor:"#000000",
    Credits:[]
}

CreditStrip.propTypes={
    StripText:PropTypes.string,
    StripURL:PropTypes.string,    
    Color:PropTypes.string,
    BgColor:PropTypes.string,
    Credits:PropTypes.arrayOf(PropTypes.instanceOf(CreditItem)),
    Symbol:PropTypes.number
}


export default CreditStrip