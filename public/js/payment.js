document.addEventListener("DOMContentLoaded", () => {
  const payBtn = document.getElementById("pay-btn");

  if (payBtn) {
    const price = payBtn.getAttribute("data-price");
    const listingTitle = payBtn.getAttribute("data-title");
    const userName = payBtn.getAttribute("data-username");
    const userEmail = payBtn.getAttribute("data-email");
    const razorpayKeyId = payBtn.getAttribute("data-key");

    payBtn.addEventListener("click", async () => {
      const res = await fetch("/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: price })
      });

      const data = await res.json();

      const options = {
        key: razorpayKeyId,
        amount: price * 100,
        currency: "INR",
        name: "Wanderlust Booking",
        description: `Booking for ${listingTitle}`,
        order_id: data.orderId,
        handler: function (response) {
          alert("✅ Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: userName,
          email: userEmail
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new Razorpay(options);
      rzp.open();
    });
  }
});
