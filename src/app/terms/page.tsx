import Link from 'next/link'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 text-lg mb-6">
            Last updated: January 19, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 mb-4">
              By downloading, installing, or using LockBox ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-400 mb-4">
              LockBox is a password management application for iOS that:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Stores passwords locally on your device</li>
              <li>Encrypts data using AES-GCM 256-bit encryption</li>
              <li>Provides password generation capabilities</li>
              <li>Offers breach monitoring services</li>
              <li>Includes AutoFill functionality for iOS</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-400 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Maintaining the security of your device</li>
              <li>Keeping your device's Face ID/Touch ID secure</li>
              <li>Creating backups of your data if desired</li>
              <li>Understanding that data loss may occur if you lose access to your device</li>
              <li>Using the App in compliance with all applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Privacy and Data</h2>
            <p className="text-gray-400 mb-4">
              Your privacy is paramount:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>We do not collect, store, or have access to your passwords</li>
              <li>All data is stored locally on your device</li>
              <li>We cannot recover lost passwords or data</li>
              <li>Our full Privacy Policy is available at <Link href="/privacy" className="text-primary hover:underline">lockboxapp.io/privacy</Link></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. License Grant</h2>
            <p className="text-gray-400 mb-4">
              We grant you a personal, non-transferable, non-exclusive license to use LockBox on your iOS devices. This license is for personal, non-commercial use only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Restrictions</h2>
            <p className="text-gray-400 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Modify, adapt, or create derivative works</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to circumvent security features</li>
              <li>Use the App in any way that could damage or overburden our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-400 mb-4">
              THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Availability or uninterrupted operation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-400 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Loss of data or passwords</li>
              <li>Unauthorized access to your information</li>
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits or business interruption</li>
              <li>Any damages exceeding the amount you paid for the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Indemnification</h2>
            <p className="text-gray-400 mb-4">
              You agree to indemnify and hold harmless Harsh Joshi and any affiliates from any claims, damages, or expenses arising from your use of the App or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Breach Monitoring Service</h2>
            <p className="text-gray-400 mb-4">
              The breach monitoring feature:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Uses the Have I Been Pwned API</li>
              <li>Is provided for informational purposes only</li>
              <li>May not detect all breaches</li>
              <li>Should not be your only security measure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Updates and Changes</h2>
            <p className="text-gray-400 mb-4">
              We may:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Update the App with new features or bug fixes</li>
              <li>Modify these Terms of Service</li>
              <li>Discontinue the App at any time</li>
            </ul>
            <p className="text-gray-400 mb-4">
              Continued use after updates constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
            <p className="text-gray-400 mb-4">
              These terms remain in effect until terminated. You may terminate by deleting the App. We may terminate your license if you violate these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
            <p className="text-gray-400 mb-4">
              These terms are governed by the laws of the United States and the State of California, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">14. Entire Agreement</h2>
            <p className="text-gray-400 mb-4">
              These Terms of Service constitute the entire agreement between you and Harsh Joshi regarding LockBox and supersede all prior agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
            <p className="text-gray-400 mb-4">
              For questions about these Terms of Service:
            </p>
            <p className="text-gray-400">
              Email: <a href="mailto:support@lockboxapp.io" className="text-primary hover:underline">support@lockboxapp.io</a>
            </p>
          </section>

          <div className="mt-12 p-6 bg-gray-900 rounded-2xl">
            <p className="text-gray-400 text-sm text-center">
              By using LockBox, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}