import './KeyFeature.css'

const TonelyoKeyFeatures = () => {
  const features = [
    {
      title: "Advanced Ordering System",
      description:
        "Browse menus, add items to store-specific carts, and complete payments using in-app wallet, ACH/e-payments, or credit/debit cards."
    },
    {
      title: "Order Tracking",
      description:
        "Track your order status in real time from confirmation to delivery."
    },
    {
      title: "Store Locator with Apple Maps",
      description:
        "Locate nearby restaurants and catering services with Apple Maps integration."
    },
    {
      title: "Push Notifications",
      description:
        "Receive instant updates about order status, promotions, and delivery progress."
    },
    {
      title: "In-App Messaging",
      description:
        "Chat directly with restaurants or caterers for order-related communication."
    }
  ];

  return (
    <section className="key-features">
        {features.map((feature, index) => (
            <div>
            <h5>{feature.title}</h5>
            <p>{feature.description}</p>
            </div>
           
        ))}
      
    </section>
  );
};

export default TonelyoKeyFeatures;
