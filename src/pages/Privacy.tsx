
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  const privacySections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us when you create an account, use our platform, or communicate with us. This may include your name, email address, and usage data."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to develop new features, and to communicate with you about our products and services."
    },
    {
      title: "How We Share Your Information",
      content: "We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service."
    },
    {
      title: "Security",
      content: "We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction."
    },
    {
      title: "Your Choices",
      content: "You can access, update, or delete your account information at any time by logging into your account settings. You can also opt out of marketing communications by following the unsubscribe instructions in our emails."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this privacy policy from time to time. If we make significant changes, we will notify you through the platform or by email."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-700 mb-8">
            Last updated: May 18, 2025
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <p className="text-lg text-gray-700">
              At CrewHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our platform.
            </p>
          </div>
          
          {privacySections.map((section, index) => (
            <div key={index} className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-700 mb-6">{section.content}</p>
              <Separator className="my-4" />
            </div>
          ))}
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about our privacy practices, please contact us at privacy@crewhub.ai.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
