
import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Music Tutorship Academy Hub</title>
        <meta name="description" content="Learn about Music Tutorship Academy Hub's privacy policy, data collection practices, and how we protect your personal information." />
        <meta property="og:title" content="Privacy Policy | Music Tutorship Academy Hub" />
        <meta property="og:description" content="Comprehensive privacy policy covering data collection, usage, and protection at Music Tutorship Academy Hub." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://music-tutorship-academy.com/privacy" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:site_name" content="Music Tutorship Academy Hub" />
        <link rel="canonical" href="https://music-tutorship-academy.com/privacy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-pink-50 pt-20">
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Privacy Policy – Music Tutorship
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                At <strong>Music Tutorship</strong>, we value and respect the privacy of our students and visitors. This Privacy Policy outlines the type of information we collect, how we use it, and your rights concerning your personal data.
              </p>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">1. Student Privacy</h2>
                <p className="text-gray-700">
                  We are committed to protecting the privacy of all our users, including students under the age of 18. If you are under 18, you must use our website and services only with the supervision and consent of a parent or legal guardian.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">2. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We may collect the following personal information through secure and encrypted channels:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Date of birth</li>
                  <li>Government-issued ID or PAN card (for identification purposes)</li>
                  <li>Credit card or payment details (for transactions)</li>
                  <li>Tax ID or identification documents (for mentors or vendors)</li>
                  <li>Device and browser data used to access our services</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  This information is collected through registrations, subscriptions, course enrollments, promotions, and usage of our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">3. Purpose of Data Collection</h2>
                <p className="text-gray-700 mb-4">Your information helps us to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Register and manage your account</li>
                  <li>Deliver the services and mentorship you have enrolled in</li>
                  <li>Personalize your learning experience</li>
                  <li>Communicate relevant updates about our courses, services, and offers</li>
                  <li>Improve our offerings and website performance</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">We do not sell your data.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">4. Email Usage Policy</h2>
                <p className="text-gray-700 mb-4">If you're enrolled in one of our programs, we may use your email to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Send course-related updates and instructions</li>
                  <li>Share promotional content only if you've opted in</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  If you're a mentor, vendor, or business partner, your email may be used to share important business updates.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">5. Sharing of Information</h2>
                <p className="text-gray-700 mb-4">We only share your data:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>With third-party vendors essential for service delivery (e.g., payment processors)</li>
                  <li>With strict confidentiality agreements</li>
                  <li>As required or permitted by law</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">We do not sell or rent your personal data to anyone.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">6. Comments and Media Uploads</h2>
                <p className="text-gray-700 mb-4">When visitors leave comments:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>We collect data provided in the comment form</li>
                  <li>The visitor's IP address and browser user agent may be stored to detect spam</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  If images are uploaded, please ensure location (EXIF GPS) data is removed. Embedded media may behave as if you're visiting the third-party website directly.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">7. Cookies and Web Data</h2>
                <p className="text-gray-700 mb-4">We use cookies to enhance your browsing experience. Cookies help us:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Save login and session data</li>
                  <li>Track activity for a better user experience</li>
                </ul>
                <p className="text-gray-700 mt-4">You can manage cookie preferences in your browser settings.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">8. Data Retention</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Comments and associated metadata are retained indefinitely</li>
                  <li>Registered user data remains until deleted by the user or administrator</li>
                  <li>Login and session cookies expire in 2 days to 2 weeks, based on your settings</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">9. Your Rights Over Your Data</h2>
                <p className="text-gray-700 mb-4">You may request:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>An exported file of your personal data</li>
                  <li>Deletion of your personal data (subject to legal or security requirements)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please email us at{' '}
                  <a href="mailto:contact@musictutorship.com" className="text-red-600 hover:underline font-semibold">
                    contact@musictutorship.com
                  </a>.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">10. Data Security and Transfers</h2>
                <p className="text-gray-700">
                  We use encrypted and secure technologies to protect your data. Visitor comments may be screened through automated spam detection tools.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">11. Updates to This Policy</h2>
                <p className="text-gray-700">
                  This policy may be updated from time to time. Changes will be posted here and will take effect upon publication.
                </p>
              </section>

              <div className="mt-12 p-6 bg-red-50 rounded-lg border border-red-200">
                <h3 className="text-xl font-bold mb-4 text-red-600 text-center">Questions or Concerns?</h3>
                <p className="text-gray-700 text-center">
                  For any privacy-related queries, please contact our team at:<br />
                  <a href="mailto:contact@musictutorship.com" className="text-red-600 hover:underline font-semibold">
                    contact@musictutorship.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Privacy;
