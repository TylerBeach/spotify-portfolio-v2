import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeDisplay: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth > 1000 ? 700 : window.innerWidth * 0.8);
    };

    // Set initial width
    updateWidth();

    // Update width on window resize
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div style={{ width, height: width * (11 / 9) }}>
        <Document
          file={pdfUrl}
          loading={<p>Loading...</p>}
          externalLinkTarget="_blank"
        >
          <Page pageNumber={1} width={width} />
        </Document>
      </div>
    </div>
  );
};

export default ResumeDisplay;
