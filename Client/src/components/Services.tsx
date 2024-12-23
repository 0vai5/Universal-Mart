import React from "react";
import { Truck, Headset, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck size={30} color="white" />,
      title: "Free and Fast Delivery",
      description: "Free delivery on all orders over Rs. 2000",
    },
    {
      icon: <Headset size={30} color="white" />,
      title: "24/7 Customer Support",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <ShieldCheck size={30} color="white" />,
      title: "Money Back Guarantee",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="max-container">
      <div className="flex justify-between items-center gap-3 md:flex-row flex-col">
        {services.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-3">
            <div className="bg-black border-gray-600 border-4 p-4 rounded-full">{item.icon}</div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
