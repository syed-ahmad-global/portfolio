import React from "react";
import { FaExclamationTriangle, FaSync } from "react-icons/fa";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // In production, you might want to log this to an error reporting service
    if (import.meta.env.DEV) {
      console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Force a page reload to reset the entire application state
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-custom-gray dark:bg-white flex items-center justify-center px-4">
          <div className="text-center">
            <div className="mb-6">
              <FaExclamationTriangle className="text-6xl text-red-500 mx-auto" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-bold text-white dark:text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 dark:text-gray-700 mb-8 max-w-md mx-auto">
              We apologize for the inconvenience. An unexpected error occurred while rendering this page.
            </p>

            <div className="space-y-4">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label="Try reloading the page"
              >
                <FaSync className="w-4 h-4" aria-hidden="true" />
                Try Again
              </button>

              <div>
                <a
                  href="/"
                  className="inline-block px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                >
                  Go to Homepage
                </a>
              </div>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 transition-colors">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-4 p-4 bg-gray-800 text-gray-300 text-xs rounded-lg overflow-auto max-h-64">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;