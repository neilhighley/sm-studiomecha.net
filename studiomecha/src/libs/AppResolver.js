

class AppResolver{
    createApp(name,desc,workDesc,timeEstimate,image){
        return {Name:name,
                Description:desc,
                WorkDescription:workDesc,
                TimeEstimate:timeEstimate,
                Image:image};
    }

    constructor(){
        this._apps=[
            this.createApp('App One','AppDescription1','workDescription1','timeEstimate1','img1'),
            this.createApp('App Two','AppDescription2','workDescription2','timeEstimate2','img2'),
            this.createApp('App Three','AppDescription3','workDescription3','timeEstimate3','img3'),
            
        ]
    }

   getAllApps(){
       return this._apps;
   }

    getApp(appId){
        if(appId>this._apps.length){return this._apps[0]}

        return this._apps[appId];
    }
}

export default AppResolver