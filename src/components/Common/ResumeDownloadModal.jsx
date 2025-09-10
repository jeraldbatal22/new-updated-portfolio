import { useState } from 'react';
import { FaTimes, FaFilePdf, FaFileWord, FaDownload } from 'react-icons/fa';
import { generateHTMLResumePDF } from '../../utils/htmlResumeGenerator';
import { generateDocxResume } from '../../utils/docxResumeGenerator';

const ResumeDownloadModal = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async (format) => {
    setIsDownloading(true);
    setError(null);
    
    try {
      console.log(`Starting ${format.toUpperCase()} generation...`);
      
      if (format === 'pdf') {
        generateHTMLResumePDF();
        console.log('PDF generation completed');
      } else if (format === 'docx') {
        generateDocxResume();
        // await generateResumeDOCX();
        console.log('DOCX generation completed');
      }
      
      // Close modal after successful generation
      setTimeout(() => {
        handleClose();
      }, 1000);
      
    } catch (error) {
      console.error(`Error generating ${format.toUpperCase()}:`, error);
      setError(`Failed to generate ${format.toUpperCase()} file. Please try again.`);
      setIsDownloading(false);
    }
  };

  // Clear error when modal is closed
  const handleClose = () => {
    setError(null);
    setIsDownloading(false);
    onClose();
  };

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Download Resume</h3>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Choose your preferred format to download the resume
          </p>

          {/* Format Options */}
          <div className="space-y-4">
            {/* PDF Option */}
            <button
              onClick={() => handleDownload('pdf')}
              disabled={isDownloading}
              className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                  <FaFilePdf className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">PDF Format</h4>
                  <p className="text-sm text-gray-500">Portable Document Format</p>
                </div>
              </div>
              <FaDownload className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </button>

            {/* DOCX Option */}
            <button
              onClick={() => handleDownload('docx')}
              disabled={isDownloading}
              className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FaFileWord className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">DOCX Format</h4>
                  <p className="text-sm text-gray-500">Microsoft Word Document</p>
                </div>
              </div>
              <FaDownload className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </button>
          </div>

          {/* Loading State */}
          {isDownloading && (
            <div className="mt-6 flex items-center justify-center space-x-2 text-blue-600">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              <span className="text-sm font-medium">Generating resume...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center space-x-2 text-red-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{error}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-gray-500 text-center">
            Resume will be automatically generated with your latest information
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownloadModal;
