import React, { useState } from 'react';
import { useCopilotAction } from '@copilotkit/react-core';
import { UploadCloud } from 'lucide-react';

const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const analyzeDocumentAction = useCopilotAction('analyzeDocument', async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/api/analyzeDocument', {
      method: 'POST',
      body: formData,
    });
    return await response.text();
  });

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      setIsUploading(true);
      try {
        const result = await analyzeDocumentAction(file);
        alert(result);
      } catch (error) {
        console.error('Error uploading document:', error);
        alert('An error occurred while uploading the document.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Study Material</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">PDF, DOCX, or TXT (MAX. 10MB)</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              accept=".pdf,.docx,.txt"
            />
          </label>
        </div>
        {file && <p className="text-sm text-gray-600">Selected file: {file.name}</p>}
        <button 
          type="submit" 
          className={`w-full px-4 py-2 text-white font-medium rounded-md ${
            isUploading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
          } transition-colors duration-300`}
          disabled={!file || isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload and Analyze'}
        </button>
      </form>
    </div>
  );
};

export default DocumentUpload;