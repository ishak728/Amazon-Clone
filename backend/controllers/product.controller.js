const Product =require('../model/product.model') 








const createProduct=async (req, res) => {

    const { name, quantity } = req.body

    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: "failed" })
    }


}


module.exports={createProduct}





 


 