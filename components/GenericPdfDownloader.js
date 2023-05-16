import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function GenericPdfDownloader({rootElementId , downloadFileName}) {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas((input),{
          windowWidth:1000
        })

            .then((canvas) => {
                
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 5,5);
                pdf.save(`${downloadFileName}.pdf`);
            })
        }
    return  <button onClick={downloadPdfDocument} id="leads__download__button">Download</button>
    
}
