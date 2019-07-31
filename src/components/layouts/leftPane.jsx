import React from "react";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "@material-ui/core/Button";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

function LeftPane(props) {
  const { styles, imgFormat, imgBytes, imgUrl } = props;
  console.log(imgUrl, imgFormat);
  switch (imgFormat) {
    case "pdf":
      return (
        <Paper style={styles.Paper}>
          <center>
            <Document
              onLoadSuccess={props.onLoadPdf}
              file={`data:application/pdf;base64,${imgBytes}`}
            >
              <Page pageNumber={props.currentPage} />
            </Document>
            <p>
              Page {props.currentPage} of {props.numPages}
            </p>
            {props.numPages > 1 && (
              <Button
                onClick={props.OnChangePage}
                color="primary"
                variant="contained"
              >
                Change Page
              </Button>
            )}
          </center>
        </Paper>
      );
    default:
      return (
        <Paper style={styles.Paper}>
          <Card>
            <CardMedia component="img" src={imgUrl} />
          </Card>
        </Paper>
      );
  }
}

export default LeftPane;
