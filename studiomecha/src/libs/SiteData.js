import data from '../data/data.json'
class SiteData{
    constructor(){
        this._configs=data.Site;
    }
    set(key,value){
        this._configs[key]=value;
    }
    get(key){
        return this._configs[key];
    }
}

export default SiteData;