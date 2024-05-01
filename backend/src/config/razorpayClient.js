const Razorpay = require('razorpay');

apiKey="rzp_test_slEgTEWcYqLGMe"
apiSecret="oVmZtvFL6T4emDFsfcNZiB6d"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;