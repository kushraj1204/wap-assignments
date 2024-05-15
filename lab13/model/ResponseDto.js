module.exports=class ResponseDto{
    constructor(data,status,message){
        this.data=data;
        if(data && !status){status=true;}
        this.status=status;
        this.message=message; 
   }
}