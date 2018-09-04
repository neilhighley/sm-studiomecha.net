
//const data = require('../data/data.json');
import data from "../data/data.json"
class AppResolver{

    constructor(){
        this._apps=data.apps;
    }

   getAllApps(){
       return this._apps;
   }
   getAppAtPosition(pos){
       if(pos>this._apps.length){
           return this._apps[0]
       }
       return this._apps[pos]
   }
    getApp(appId){
        for(var i=0;i<this._apps.length;i++){
            if(this._apps[i].Id===appId){
                return this._apps[i]
            }
        }
        return this._apps[0]
    }
    refresh(){
        this._apps=data.apps;
    }
}

export default AppResolver