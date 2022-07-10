import mergePdfBuffers from "merge-pdf-buffers";

const mergePdfs = async (files) => {
  if (!files) {
    throw new Error("Any pdf to merge, please select files and try again.");
  }

  if(!files.length){
    throw new Error("Please select more than one pdf to merge.");
  }

  const fileTypes = files.map((file) => file.mimetype.split("/")[1]);

  if (fileTypes.find((type) => type !== "pdf")) {
    throw new Error("The application accepts only PDF files.");
  }

  const fileBuffers = files.map((file) => file.data);

  return Buffer.from(await mergePdfBuffers.merge(fileBuffers)).toString(
    "base64"
  );
};

export default mergePdfs;
