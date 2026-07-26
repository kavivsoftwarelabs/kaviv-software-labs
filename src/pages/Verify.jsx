import Navbar from "../components/site/Navbar";
import Footer from "../components/site/Footer";
import { useState } from "react";
import { getCertificateById } from "../data/certificates";
import { CheckCircle, XCircle, Search } from "lucide-react";

export default function Verify() {
  const [certificateId, setCertificateId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(true);

    // Simulate slight delay for better UX
    setTimeout(() => {
      const certificate = getCertificateById(certificateId.trim());
      setSearchResult(certificate);
      setIsLoading(false);
    }, 300);
  };

  const handleReset = () => {
    setCertificateId("");
    setSearchResult(null);
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen bg-offwhite text-navy-900" data-testid="verify-page">
      <Navbar />
      <main>
        <section className="py-20 lg:py-28 min-h-[calc(100vh-4rem)] flex items-center">
          <div className="max-w-2xl mx-auto px-6 lg:px-10 w-full">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-600 mb-4">
                {'// Verify Certificate'}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-navy-900 mb-4">
                Verify Your Certificate
              </h1>
              <p className="text-navy-600 text-lg leading-relaxed max-w-xl mx-auto">
                Enter your certificate ID to verify your completion of the 3-Week Internship Program at Kaviv Software Labs.
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-2xl border border-navy-100 p-8 shadow-sm mb-8">
              <form onSubmit={handleSearch} className="space-y-6">
                <div>
                  <label
                    htmlFor="cert-id"
                    className="block text-sm font-semibold text-navy-900 mb-3"
                  >
                    Certificate ID
                  </label>
                  <div className="relative">
                    <input
                      id="cert-id"
                      type="text"
                      placeholder="e.g., KVL-SIM-2025-A001"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-navy-900 placeholder-navy-400 font-mono"
                      data-testid="verify-cert-id-input"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={!certificateId.trim() || isLoading}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 hover:bg-indigo-600 disabled:bg-navy-200 disabled:cursor-not-allowed transition-colors text-offwhite px-6 py-3 font-medium"
                    data-testid="verify-search-btn"
                  >
                    <Search className="size-4" />
                    {isLoading ? "Verifying..." : "Verify Certificate"}
                  </button>
                  {hasSearched && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-lg border border-navy-200 hover:border-navy-400 bg-white text-navy-900 px-6 py-3 font-medium transition-colors"
                      data-testid="verify-reset-btn"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Results (only show ID, name, issued date) */}
            {hasSearched && (
              <div className="space-y-4">
                {searchResult ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8" data-testid="verify-success">
                    <div className="flex items-start gap-4 mb-6">
                      <CheckCircle className="size-6 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xl font-bold text-green-900">Certificate Verified ✓</h3>
                        <p className="text-green-700 text-sm mt-1">This is a valid certificate issued by Kaviv Software Labs.</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="border-t border-green-200 pt-4">
                        <p className="text-xs font-mono text-green-600 uppercase tracking-wider mb-1">Certificate ID</p>
                        <p className="text-lg font-semibold text-green-900">{searchResult.id}</p>
                      </div>
                      <div className="border-t border-green-200 pt-4">
                        <p className="text-xs font-mono text-green-600 uppercase tracking-wider mb-1">Intern Name</p>
                        <p className="text-lg font-semibold text-green-900">{searchResult.internName}</p>
                      </div>
                      <div className="border-t border-green-200 pt-4">
                        <p className="text-xs font-mono text-green-600 uppercase tracking-wider mb-1">Issued Date</p>
                        <p className="text-lg font-semibold text-green-900">{new Date(searchResult.issueDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-8" data-testid="verify-not-found">
                    <div className="flex items-start gap-4">
                      <XCircle className="size-6 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xl font-bold text-red-900">Certificate Not Found</h3>
                        <p className="text-red-700 text-sm mt-2">The certificate ID "{certificateId}" could not be found in our system. Please check the ID and try again.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Info Box */}
            {!hasSearched && (
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
                <p className="text-navy-700 text-sm leading-relaxed">
                  Enter the certificate ID shown on your completion document to verify it instantly.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}