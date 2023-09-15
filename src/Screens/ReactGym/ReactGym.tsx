import { StateCounter } from "./StateCounter/StateCounter";
import { EffectOne } from "./Effect/EffectOne";
import { GYMContainer } from "./styledReactGym";
import { EffectTwo } from "./Effect/EffectTwo";
import { Memo } from "./Memo/Memo";
import { Portal } from "./Portal/Portal";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const ReactGym = () => {
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.getElementById("PDF")!);
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("shipping_label.pdf");
  };

  return (
    <GYMContainer id="PDF">
      <button
        onClick={() => {
          createPDF();
          console.log("Logged into the console");
        }}
      >
        Export PDF
      </button>
      <div style={{ background: "#F00" }}>
        <StateCounter />
        <EffectOne />
        <EffectTwo />
        <Memo />
        <Portal />
      </div>
    </GYMContainer>
  );
};
