class CreditItem{
    constructor(txt,url,col){
        console.log("CreditItem Constructor")
        this._txt=txt
        this._url=url
        this._color=col
        this._contentAdded=false
        this._key=this
    }
    get key(){
        return this._key;
    }
    get URL(){
        return this._url
    }
    get Text(){
        return this._txt
    }
    get Color(){
        return this._color
    }
    get HasContent(){

        return this._contentAdded
    }
    get Content(){
        return this._content
    }
    set Content(value){
        this._contentAdded=true;
        this._content=value
    }
}

export default CreditItem