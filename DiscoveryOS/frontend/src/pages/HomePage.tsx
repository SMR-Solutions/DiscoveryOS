/**
 * Home Page
 * Placeholder landing/home page for DiscoveryOS
 */
export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          DiscoveryOS
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Transform scattered customer research into evidence-based product decisions.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
