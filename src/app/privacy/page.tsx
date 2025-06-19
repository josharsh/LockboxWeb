import Link from 'next/link'

export default function PrivacyPolicy() {
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
        
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 text-lg mb-6">
            Last updated: January 19, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment to Your Privacy</h2>
            <p className="text-gray-400 mb-4">
              At LockBox, privacy isn't just a feature—it's our foundation. This policy explains how we protect your privacy and what data we don't collect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">What We Don't Collect</h2>
            <p className="text-gray-400 mb-4">
              LockBox is designed with a zero-knowledge architecture. Here's what we don't collect:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Your passwords or any credential data</li>
              <li>Your master password or biometric data</li>
              <li>Personal information (name, email, phone number)</li>
              <li>Usage analytics or tracking data</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Location data</li>
              <li>Crash reports or diagnostic data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Storage</h2>
            <p className="text-gray-400 mb-4">
              All your data is stored locally on your device:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Passwords are encrypted using AES-GCM 256-bit encryption</li>
              <li>Encryption keys are stored in the iOS Keychain</li>
              <li>Data never leaves your device</li>
              <li>No cloud synchronization or backup</li>
              <li>You have complete control over your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Password Breach Monitoring</h2>
            <p className="text-gray-400 mb-4">
              When you use the breach monitoring feature:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>We use the Have I Been Pwned API with k-anonymity</li>
              <li>Only the first 5 characters of a hashed password are sent</li>
              <li>Your actual passwords are never transmitted</li>
              <li>The check is performed on-device</li>
              <li>This feature is optional and user-initiated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-400 mb-4">
              LockBox uses minimal third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li><strong>Have I Been Pwned API:</strong> For optional breach checking (privacy-preserving)</li>
              <li><strong>App Store:</strong> For app distribution and updates</li>
            </ul>
            <p className="text-gray-400 mb-4">
              No analytics, tracking, or advertising services are used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Security Measures</h2>
            <p className="text-gray-400 mb-4">
              We implement industry-leading security measures:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>AES-GCM 256-bit encryption for all stored data</li>
              <li>Face ID/Touch ID authentication required</li>
              <li>Automatic lock on app backgrounding</li>
              <li>Clipboard auto-clear after 30 seconds</li>
              <li>No network communication except for breach checks</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-400 mb-4">
              With LockBox, you have complete control:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Export your data at any time</li>
              <li>Delete all data by uninstalling the app</li>
              <li>No account or registration required</li>
              <li>No data to request or delete from us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-400 mb-4">
              LockBox is designed for users of all ages. Since we don't collect any personal information, there are no special provisions needed for children's privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-400 mb-4">
              We may update this privacy policy from time to time. Any changes will be reflected in the app and on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              If you have questions about this privacy policy or LockBox:
            </p>
            <p className="text-gray-400">
              Email: <a href="mailto:support@lockboxapp.io" className="text-primary hover:underline">support@lockboxapp.io</a>
            </p>
          </section>

          <div className="mt-12 p-6 bg-gray-900 rounded-2xl">
            <p className="text-gray-400 text-sm text-center">
              <strong>Remember:</strong> Your privacy is our priority. We can't see your passwords, and that's by design.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}