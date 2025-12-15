import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
          <span className="text-2xl">⚖️</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Terms & Conditions</h1>
        <p className="text-gray-500 text-lg">The rules of the gifting game.</p>
      </div>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-primary prose-p:text-gray-600">
        <h3>1. Introduction</h3>
        <p>
          Welcome to Surprez! These terms and conditions outline the rules and regulations for the use of our Website. By accessing this website we assume you accept these terms and conditions.
        </p>
        
        <h3>2. User Eligibility</h3>
        <p>
          By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
        </p>

        <h3>3. Orders & Payments</h3>
        <p>
          We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. All payments are processed securely.
        </p>

        <h3>4. Limitation of Liability</h3>
        <p>
          In no case shall Surprez, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.
        </p>
      </div>
    </div>
  );
};

export default Terms;