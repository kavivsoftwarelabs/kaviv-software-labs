// Certificates are stored in a JSON file for easy updates.
// Format for IDs: KVL-<PROGRAM NAME>-<YEAR>-<LETTER><SEQUENCE>
import CERTIFICATES from "./certificates.json";

/**
 * Search for a certificate by ID
 * @param {string} certificateId - The certificate ID to search for
 * @returns {object|null} - The certificate object if found, null otherwise
 */
export function getCertificateById(certificateId) {
  if (!certificateId) return null;
  return (
    CERTIFICATES.find((cert) => cert.id.toUpperCase() === certificateId.toUpperCase()) ||
    null
  );
}

/**
 * Validate if a certificate ID exists
 * @param {string} certificateId - The certificate ID to validate
 * @returns {boolean} - True if certificate exists, false otherwise
 */
export function isValidCertificateId(certificateId) {
  return getCertificateById(certificateId) !== null;
}
