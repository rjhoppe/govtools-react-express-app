import { useState } from 'react'

const Uploadcsv = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please first select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {

        	const response = await fetch ("", {
				method: "POST",
				body: formData

        });

		if (response.ok) {
			alert("File upload is successful");
		} else {
			alert("Failed to upload the file");
		}
		} catch (error) {
			console.error("Error while uploading the file:", error);
			alert("Error occurred while uploading the file");
		}

    }


  return (
    <div>
		<h2>Single File Upload</h2>
		<input type='file' onChange={handleFileChange} />
		<button onClick={handleUpload}>Upload</button>
	</div>
  )
}

export default Uploadcsv