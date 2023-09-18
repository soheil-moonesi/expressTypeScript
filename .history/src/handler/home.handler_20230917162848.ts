(req:Request,res:Response,next:NextFunction)=>{

    res.status(200).json({success:true,status:200,message:"hello server"})
    next()
})