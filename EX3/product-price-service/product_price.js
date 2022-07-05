

module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(args, done)
    {
        let productId = args.productId;
        let bookPrice = null; 
        for(let i=0; i < mockData.length; i++)
        {
            if (mockData[i].product_id == productId)
            {
                bookPrice = mockData[i].product_price;
            }
        }
        done(null, { result: bookPrice });
    }
}