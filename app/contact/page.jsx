"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "[+94] 776 367 612",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kanishkadela@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Dela Walawwa, Wikiliya, Balangoda",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "+94776367612"; // Your WhatsApp number in international format
    const textMessage = `Hello, I'm ${formData.firstname} ${formData.lastname}.
    
✉ Email: ${formData.email}  
📞 Phone: ${formData.phone}  
🔧 Service: ${formData.service || "Not specified"}  

📝 Message:  
${formData.message}  

Looking forward to your response!`;

    const whatsappURL = `https://wa.me/${+94776367612}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container ms-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Hire Me</h3>
              <p className="text-white/60">
                I’m currently looking for new opportunities and would love to be a part of an innovative team. If you’re hiring or have a project that fits my skills, feel free to reach out. Let’s connect and discuss how I can contribute to your team’s success!
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              </div>
              {/* Select Field */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UX/UI Design">UX/UI Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea className="h-[280px]" placeholder="Type your message here..." name="message" value={formData.message} onChange={handleChange} required />
              {/* Submit Button */}
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
