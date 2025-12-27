// This is a mock service for Razorpay integration
// In a real application, you would load the Razorpay SDK script

export const loadRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export const handlePayment = async (amount, onSuccess, onError) => {
    const res = await loadRazorpay();

    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
    }

    // In a real app, you would call your backend to create an order first
    // const data = await fetch('/api/payment/order', { method: 'POST', ... }).then((t) => t.json());

    const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Enter the Key ID generated from the Dashboard
        amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Vanprastha Foundation",
        description: "Donation",
        image: "https://via.placeholder.com/150", // Replace with your logo
        // order_id: data.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            onSuccess(response);
        },
        prefill: {
            name: "Gaurav Kumar", // You would populate this from the form
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#2E7D32"
        }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};
