
const data = require('../data/data.json');

class AppResolver{

    constructor(){
        this._apps=data.apps;
    }

   getAllApps(){
       return this._apps;
   }

    getApp(appId){
        if(appId>this._apps.length-1){return this._apps[0]}

        return this._apps[appId];
    }
}

export default AppResolver