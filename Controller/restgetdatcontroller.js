const ResData = require("../Model/Db");

//Get
module.exports.addData =async (req,res)=>{
    console.log(req.body);
    const {title,subtitle} = req.body;
    try{
        const staticData = new ResData({
            title,
            subtitle
        });
        await staticData.save();
        res.status(201).send(staticData);

    }catch (error){
        res.status(401).send(error);

    }
}
module.exports.addData2 = async (req,res)=>{
    const {MRP,SellingPrice} = req.body;

    try{
        const staticData = new ResData({
            MRP,
            SellingPrice
        });
        await staticData.save();
        res.status(201).send(staticData);
    }catch (error){
        res.status(401).send(error);


    }

}


//Put

module.exports.putData = async (req, res) => {
    const { id } = req.params;
    const { MRP, SellingPrice } = req.body;

    try {
        // Find the existing document by id and update it
        const updatedData = await ResData.findByIdAndUpdate(
            id,
            { MRP, SellingPrice }
           
        );

        if (!updatedData) {
            return res.status(404).send({ error: 'Data not found' });
        }
        await updatedData.save();
        res.status(200).send(updatedData);
    } catch (error) {
        res.status(400).send(error);
    }
}


//Delete
module.exports.deleteData = async (req, res) => {
    const { id } = req.params;
    
    try {
        
        const deletedData = await ResData.findByIdAndDelete(id);

        if (!deletedData) {
            return res.status(404).send({ error: 'Data not found' });
        }
        await deleteData.save();
        res.status(200).send({ message: 'Data deleted successfully', data: deletedData });
    } catch (error) {
        res.status(400).send(error);
    }
}

