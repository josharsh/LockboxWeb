export default function Showcase() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Beautiful. Secure. Simple.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the perfect balance of security and usability
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="aspect-[3/4] bg-black rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-primary/10 rounded-full">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Face ID</h3>
                <p className="text-gray-400 text-sm">Unlock with a glance</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Instant Authentication
            </h3>
            <p className="text-gray-400">
              No master password to remember. Your face is your key to all your passwords.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="aspect-[3/4] bg-black rounded-xl mb-6 p-6">
              <div className="space-y-3">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Netflix</span>
                    <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">Secure</span>
                  </div>
                  <div className="text-sm text-gray-400">john.doe@email.com</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">GitHub</span>
                    <span className="text-xs text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">Weak</span>
                  </div>
                  <div className="text-sm text-gray-400">johndoe</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Apple ID</span>
                    <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">Secure</span>
                  </div>
                  <div className="text-sm text-gray-400">john.doe@icloud.com</div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Smart Organization
            </h3>
            <p className="text-gray-400">
              Search, sort, and manage your passwords with ease. See security status at a glance.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="aspect-[3/4] bg-black rounded-xl mb-6 p-6 flex items-center">
              <div className="w-full">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-2">Generated Password</div>
                  <div className="font-mono text-white text-lg mb-3">Kj9#mP2$xQ7!</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-green-500">Strong</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">52 bits</div>
                  <div className="text-sm text-gray-400">of entropy</div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Password Generator
            </h3>
            <p className="text-gray-400">
              Create strong passwords or memorable passphrases with calculated entropy scores.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}