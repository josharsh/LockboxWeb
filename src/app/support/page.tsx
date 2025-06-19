import Link from 'next/link'

export default function Support() {
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
        
        <h1 className="text-4xl font-bold text-white mb-8">Support</h1>
        
        <div className="space-y-8">
          <section className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Getting Started</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                LockBox is designed to be intuitive and easy to use. Here's how to get started:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download LockBox from the App Store</li>
                <li>Open the app and authenticate with Face ID</li>
                <li>Start adding your passwords</li>
                <li>Use the password generator for new accounts</li>
                <li>Enable AutoFill in Settings → Passwords → AutoFill Passwords</li>
              </ol>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">How secure is LockBox?</h3>
                <p className="text-gray-400">
                  LockBox uses AES-GCM 256-bit encryption, the same standard used by governments and financial institutions. Your passwords are encrypted on your device and never leave it.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">What happens if I lose my device?</h3>
                <p className="text-gray-400">
                  Since LockBox stores data locally without cloud sync, you'll need to manually back up your passwords. We recommend keeping a secure backup of important passwords.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Can I sync between devices?</h3>
                <p className="text-gray-400">
                  Currently, LockBox doesn't support syncing to maintain maximum security and privacy. Each device maintains its own encrypted vault.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">How does breach monitoring work?</h3>
                <p className="text-gray-400">
                  LockBox uses the Have I Been Pwned API with k-anonymity. Only the first 5 characters of a hashed password are sent, ensuring your actual passwords remain private.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Is there a subscription fee?</h3>
                <p className="text-gray-400">
                  No! LockBox is completely free with no subscriptions, ads, or in-app purchases. We believe security should be accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Troubleshooting</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">AutoFill not working?</h3>
                <p className="text-gray-400">
                  Go to Settings → Passwords → AutoFill Passwords and ensure LockBox is enabled. You may need to disable other password managers.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Face ID not recognized?</h3>
                <p className="text-gray-400">
                  Ensure Face ID is enabled for LockBox in Settings → Face ID & Passcode. You can also re-enroll your Face ID if needed.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">App crashes on launch?</h3>
                <p className="text-gray-400">
                  Try restarting your device. If the issue persists, you may need to reinstall the app (note: this will delete all stored passwords).
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Support</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Still need help? We're here for you.
              </p>
              <div className="space-y-2">
                <p>
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:support@lockboxapp.io" className="text-primary hover:underline">
                    support@lockboxapp.io
                  </a>
                </p>
                <p className="text-sm">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-primary/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Security Report</h2>
            <p className="text-gray-400">
              Found a security issue? We take security seriously and appreciate responsible disclosure. Please email security concerns to{' '}
              <a href="mailto:security@lockboxapp.io" className="text-primary hover:underline">
                security@lockboxapp.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}