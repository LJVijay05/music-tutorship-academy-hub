
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-pink-50 pt-20">
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Terms &amp; Conditions – Music Tutorship
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Welcome to <strong>Music Tutorship</strong>. By enrolling in our programs, you agree to the terms outlined below. These ensure a respectful, focused, and professional learning environment for all.
              </p>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">1. Code of Conduct</h2>
                <p className="text-gray-700 mb-4">
                  All classes are structured learning environments. Students are expected to:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                  <li>Log in at least 10 minutes before the session using their full registered name.</li>
                  <li>Keep video ON and microphone muted unless prompted.</li>
                  <li>Attend from a quiet, well-lit space without distractions.</li>
                  <li>Dress appropriately and stay seated throughout the class.</li>
                  <li>Avoid multitasking, eating, or lying down during sessions.</li>
                  <li>Use the chat only as instructed by the mentor.</li>
                  <li>Do not record, share, or distribute any class content or links.</li>
                  <li>Refrain from sharing personal contact details in class.</li>
                  <li>Avoid organizing unofficial sessions or groups without approval.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">2. Course-Specific Guidelines</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Complete Music Production Mastery (Group Program):</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Missed sessions will not be repeated. However, recorded sessions will be provided.</li>
                    <li>Substitute mentors may conduct sessions if the original mentor is unavailable.</li>
                    <li>If no substitute is available, the session will be rescheduled.</li>
                    <li>Extra sessions can be booked for an additional fee, subject to mentor availability.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">One-on-One Music Production Mentorship:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Free rescheduling is allowed with prior notice.</li>
                    <li>Missed classes can be rescheduled directly with the mentor.</li>
                    <li>Additional sessions may be booked based on mentor availability.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">3. Use of Course Material</h2>
                <p className="text-gray-700">
                  All learning content is strictly for enrolled students only. Redistribution, reproduction, or sharing of any material or live class links is prohibited.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">4. Online Class Etiquette</h2>
                <p className="text-gray-700 mb-4">
                  To maintain a smooth and focused learning experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Keep your microphone muted when not speaking.</li>
                  <li>Avoid background noise, distractions, or unrelated browsing.</li>
                  <li>Participate actively, be attentive on video, and avoid unnecessary movement.</li>
                  <li>Avoid typing sounds and keep all stationery ready in advance.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">5. Disciplinary Policy</h2>
                <p className="text-gray-700 mb-4">
                  Violation of the code of conduct may lead to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li>Verbal warnings</li>
                  <li>Temporary communication restrictions</li>
                  <li>Suspension from sessions</li>
                  <li>Removal from the course without refund in serious cases</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Examples of unacceptable behavior include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Class disruption</li>
                  <li>Sharing or recording class content</li>
                  <li>Inappropriate messages, links, or conduct</li>
                  <li>Repeated absences or failure to follow guidelines</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">6. Media Consent</h2>
                <p className="text-gray-700">
                  By joining our sessions, you consent to Music Tutorship capturing photos, videos, or recordings during sessions. These may be used for educational or promotional purposes across platforms without further approval.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">7. Batch and Schedule Change Policy</h2>
                <p className="text-gray-700 mb-4">
                  For Complete Music Production Mastery:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>A batch change is only allowed if the new batch has fewer than 5 students.</li>
                  <li>A one-time administrative fee of ₹2500 applies.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">8. Refund Policy</h2>
                <p className="text-gray-700">
                  All course fees are non-refundable. Refunds may be granted only in rare, exceptional cases at the sole discretion of Music Tutorship.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600">9. Extra Sessions</h2>
                <p className="text-gray-700">
                  Make-up sessions are not included. However, additional sessions can be booked for an extra fee, subject to mentor availability.
                </p>
              </section>

              <div className="mt-12 p-6 bg-red-50 rounded-lg border border-red-200">
                <p className="text-gray-700 text-center">
                  <strong>Contact Information:</strong><br />
                  If you have questions or require assistance, please contact us at{' '}
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

export default Terms;
