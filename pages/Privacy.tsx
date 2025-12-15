import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mb-4">
          <span className="text-2xl">🔒</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-lg">Your secrets are safe with us.</p>
      </div>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-primary prose-p:text-gray-600">
        <h3>1. Information We Collect</h3>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
        </p>
        
        <h3>2. How We Use Your Data</h3>
        <p>
          We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>

        <h3>3. Sharing Your Information</h3>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
        </p>

        <h3>4. Contact Us</h3>
        <p>
          If you have questions or comments about this policy, you may email us at privacy@surprez.com.
        </p>
      </div>
    </div>
  );
};

export default Privacy;