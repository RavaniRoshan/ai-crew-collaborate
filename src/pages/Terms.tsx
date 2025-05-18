
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  const termsSections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using CrewHub, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use CrewHub."
    },
    {
      title: "Description of Services",
      content: "CrewHub provides a platform for AI agent orchestration and management. Our services include agent configuration, workflow building, and collaboration tools."
    },
    {
      title: "User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
    },
    {
      title: "Content and Conduct",
      content: "You retain ownership of any content you submit to CrewHub. However, you grant us a license to use, store, and display your content in connection with providing our services."
    },
    {
      title: "Intellectual Property",
      content: "CrewHub and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your account and access to CrewHub at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of CrewHub or third parties."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall CrewHub, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-700 mb-8">
            Last updated: May 18, 2025
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <p className="text-lg text-gray-700">
              Please read these Terms of Service carefully before using CrewHub. These terms govern your use of our platform and services.
            </p>
          </div>
          
          {termsSections.map((section, index) => (
            <div key={index} className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-700 mb-6">{section.content}</p>
              <Separator className="my-4" />
            </div>
          ))}
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will provide notice of any significant changes by posting the new Terms of Service on this page and updating the "last updated" date.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
