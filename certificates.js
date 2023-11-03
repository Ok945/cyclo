// only for 3km certificates

const userName = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const map1 = new Map(); //for 10 km
const map2 = new Map(); // for 5 km
const map3 = new Map(); // for 3 km
const canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');

map3.set('30001','Jayesh Gharade');
map2.set('50002','Ashish Sankpal');
map1.set('10003','Avinash Gaikwad');
map3.set('30004','Maithili Joshi');


const { PDFDocument, rgb, degrees } = PDFLib;


const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  ); // function to make the first character of the string to upper case and the rest of te string to the lower case.

  submitBtn.addEventListener("click", () => {

    // console.log("button pressed");
    const temp = userName.value;
    const fin = temp.trim();

    if(map3.has(fin)){
        $('#fader').show();
        const val = map3.get(fin);

        // check if the text is empty or not.
        if(val.trim() !== "" && userName.checkValidity()){
            generatePDF3(val);
        }

        else{
            userName.reportValidity();
            $('#fader').hide();
        }
    }
    else if(map2.has(fin)){ //for 5km
        $('#fader').show();
           const val = map2.get(fin);
          // notice.showLoading();
          // alert(val);
          // val = capitalize(val);
      
        //check if the text is empty or not
        if (val.trim() !== "" && userName.checkValidity()) {
          // console.log(val);
      
          generatePDF2(val);
          // alert(val);
        } else {
          userName.reportValidity();
          $('#fader').hide();
        }
    }
    else if(map1.has(fin)){ //for 3km
        $('#fader').show();
           const val = map1.get(fin);
          // notice.showLoading();
          // alert(val);
          // val = capitalize(val);
      
        //check if the text is empty or not
        if (val.trim() !== "" && userName.checkValidity()) {
          // console.log(val);
      
          generatePDF3(val);
          // alert(val);
        } else {
          userName.reportValidity();
          $('#fader').hide();
        }
    }
    else{
        alert("Invalid BIB");
    }
});


function getTextWidth(text,font){
    // if given , use cached canvas for better performance 
    // else, create new canvas
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}



const generatePDF1 = async (name) => {
    const existingPdfBytes = await fetch("./3km.pdf").then((res) =>
      res.arrayBuffer()
    );
  
    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);
  
    //get font
    const fontBytes = await fetch("./cert.ttf").then((res) =>
      res.arrayBuffer()
    );
  
    // Embed our custom font in the document
    const SanChezFont = await pdfDoc.embedFont(fontBytes);
  
    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
  
    var fontDet = "45px SanChezFont";
  
    var width = getTextWidth(name,fontDet);
    console.log(width);
    var xT = (825 - width)/2;
    // Draw a string of text diagonally across the first page
    firstPage.drawText(name, {
      x: xT,
      y: 245,
      size: 45,
      // fontWeight = 'bold',
      font: SanChezFont,
      color: rgb(0.2,0.2,0.6),
    });
  
    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");
    $('#name').val('');
    $('#fader').hide();
  
    // this was for creating uri and showing in iframe
  
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("pdf").src = pdfDataUri;
  
    var file = new File(
      [pdfBytes],
      "coepmarathon.pdf",
      {
        type: "application/pdf;charset=utf-8",
      }
    );
   saveAs(file);
};
  
  
  
  
const generatePDF2 = async (name) => {
    const existingPdfBytes = await fetch("./3km.pdf").then((res) =>
      res.arrayBuffer()
    );
  
    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);
  
    //get font
    const fontBytes = await fetch("./cert.ttf").then((res) =>
      res.arrayBuffer()
    );
  
    // Embed our custom font in the document
    const SanChezFont = await pdfDoc.embedFont(fontBytes);
  
    // Get the first page of the document
    const pages = pdfDoc.getPages();
  
    const firstPage = pages[0];
    var fontDet = "45px SanChezFont";
  
    var width = getTextWidth(name,fontDet);
    console.log(width);
    var xT = (825 - width)/2;
    firstPage.drawText(name, {
       x: xT,
      y: 245,
      size: 45,
      // fontWeight = 'bold',
      font: SanChezFont,
        color: rgb(0.2,0.2,0.6),
    });
  
    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");
    $('#name').val('');
    $('#fader').hide();
  
    // this was for creating uri and showing in iframe
  
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("pdf").src = pdfDataUri;
  
    var file = new File(
      [pdfBytes],
      "coepmarathon.pdf",
      {
        type: "application/pdf;charset=utf-8",
      }
    );
   saveAs(file);
};
  
  


generatePDF3 = async(name)=>{
    const existingPdfBytes = await fetch("./3km.pdf").then((res) => res.arrayBuffer());

    // load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

    // get font
    const fontBytes = await fetch("./cert.ttf").then((res) => res.arrayBuffer());

    // Embed our custom font in the document
    const SanChezFont = await pdfDoc.embedFont(fontBytes);

    // Get the first page of the document

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    var fontDet = "38px SanChezFont";

    var width = getTextWidth(name,fontDet);
    console.log(width);
    var xT = (825 - width)/2;

    // Draw a string of text diagonally across the first page

    firstPage.drawText(name,{
        x:xT,
        y:280,
        size:38,

        // fontWeight = 'bold',
        font: SanChezFont,
            color: rgb(0.2,0.2,0.6),
    });

    // Serialize the PDFDocumnet to bytes (a Unit8Array)
    
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");

    $('#name').val('');
    $('fader').hide();

    // this was for creating uri and showing in frame.

    // const pdfFDataUri = await pdfDoc.saveAsBase64({dataUri : true});
    // document.getElementById("pdf").src = pdfDataUri;


    var file = new File(
        [pdfBytes],
        "coepZestMarathon.pdf",
        {
            type:"application/pdf;charset=utf-8",
        }
    );
    saveAs(file);
};



