import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Terms = () => {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    // Check for flag in localStorage
    if (localStorage.getItem('accessedTermsViaFooter') === 'yes') {
      localStorage.removeItem('accessedTermsViaFooter');
      setAllowed(true);
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  if (!allowed) return null;

  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | Music Tutorship Academy Hub</title>
        <meta name="description" content="Review the terms and conditions governing the use of Music Tutorship Academy Hub, including our refund policy, user responsibilities, and legal limitations." />
        <meta property="og:title" content="Terms &amp; Conditions | Music Tutorship Academy Hub" />
        <meta property="og:description" content="See the full terms and conditions for Music Tutorship Academy Hub, covering services, eligibility, policies, and contact information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://music-tutorship-academy.com/terms" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:site_name" content="Music Tutorship Academy Hub" />
        <link rel="canonical" href="https://music-tutorship-academy.com/terms" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-3xl mx-auto py-12 px-4 md:px-0">
        <h1 className="text-2xl font-bold mb-4">Terms &amp; Conditions</h1>
        <p className="mb-4">
          Welcome to <strong>Music Tutorship</strong> (<a href="https://www.musictutorship.com" className="underline text-red-600" target="_blank" rel="noopener">www.musictutorship.com</a>). By enrolling in our music education services, you agree to comply with the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Services Offered</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Online and in-person music lessons</li>
          <li>Theory, instrumental, vocal, and music production training</li>
          <li>Workshops, masterclasses, and educational resources</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Eligibility</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Our programs are designed for individuals aged 5–6 and above, including adults of all skill levels.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Refund Policy</h2>
        <ul className="list-disc list-inside mb-4">
          <li>We offer a <strong>7-day refund</strong> policy. If you have used <strong>less than 20% of your course</strong> content, you may request a refund within 7 days of purchase.</li>
          <li>No refunds will be processed after this period or if more than 20% of the course has been accessed.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Conduct &amp; Responsibilities</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Please conduct yourself respectfully and courteously during all classes and communications.</li>
          <li>Disruptive, offensive, or harmful behavior is not tolerated and may result in suspension or termination.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Legal Usage &amp; Limitations</h2>
        <ul className="list-disc list-inside mb-4">
          <li>The Music Tutorship platform is for lawful and educational use only.</li>
          <li>We are not liable for any indirect or consequential loss resulting from your use of our platform.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
        <p>
          If you have questions or require assistance, please contact us at <a href="mailto:support@musictutorship.com" className="underline text-red-600">support@musictutorship.com</a>.
        </p>
      </div>
    </>
  );
};

export default Terms;
