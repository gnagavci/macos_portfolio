import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Download } from "lucide-react";
import React from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Fix 1: Use local worker import for better stability with Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

const Resume = () => {
    // Fix 2: Use import.meta.env.BASE_URL to ensure correct path in production/deployment
    const resumeUrl = `${import.meta.env.BASE_URL}files/resume.pdf`;

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                {/* Fix 3: Update download link to use correct base path */}
                <a
                    href={resumeUrl}
                    download
                    className="cursor-pointer"
                    title="Download resume"
                >
                    <Download className="icon" />
                </a>
            </div>
            {/* Fix 4: Pass the correct URL to Document */}
            <Document file={resumeUrl}>
                <Page
                    pageNumber={1}
                    renderTextLayer
                    renderAnnotationLayer
                    scale={0.8}
                />
            </Document>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
