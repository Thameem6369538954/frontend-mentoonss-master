import React, { useState } from "react";
import "../pagecss/Productitems.css";
import { useFormik } from "formik";
// import AWS from 'aws-sdk';
// import cloudinary from "cloudinary-core"
import axios from '../api/Baseurl';
// const cl=cloudinary.Cloudinary.new({cloud_name:'dhwdphigu'})

const Productitems = () => {
  // const [video,setVideo] =useState("");


  var [thumbnail,setthumbnail] = useState("")
  var [source,setsource] = useState(" ")


  const handleChange = (event) =>{
    console.log(event,"this is form eventsssssssssssss----------thumbnail");
    let files = event.target.files[0];
    setthumbnail(files)
    
    console.log(files,"files coming............");
  }
const handleControll = (event) =>{
  console.log(event,"handle controllllll-------source");
  let file = event.target.files[0];
  setsource(file)
}

// const determineFileType = (fileName) => {
//   console.log(fileName,"for changing type..............");
//   // You can implement a logic to determine the file type based on the file name or content type
//   // For simplicity, let's assume the file extension represents the type
//   const fileExtension = fileName.split('.').pop().toLowerCase();
  
//   // Map common file extensions to folder names (adjust this based on your actual use case)
//   const fileTypeMappings = {
//     pdf: 'pdf',
//     mp3: 'audio',
//     wav: 'audio',
//     mp4: 'video',
//     // Add more mappings as needed
//   };

//   return fileTypeMappings[fileExtension] || 'other'; // Default to 'other' if not found
// };

  const formik = useFormik({
    initialValues: {
      productName: "",
      productDescription:" ",
      productCategory: "",
      ageCategory: "",
      price: "",
      free: "",
      thumbnail: "",
      source: "",
    },

    onSubmit:async (values)=>{
      // setLoding(true)
      const body = {
  
          productName : values.productName,
          productDescription:values.productDescription,
          productCategory : values.productCategory,
          ageCategory:values.ageCategory,
          price : values.price,
          free :values.free,
       
          
  
    }
    // console.log(thumbnail,"thumbbbbbbbbbbbbbbbbbbbbbbbbb");
    // console.log(source,"sooooooooooooooooooooooooo");

    if(thumbnail){
    console.log(thumbnail,";;;;;;;;;;;;;;;;;;;;;;;;00088");
      const formData = new FormData()
      formData.append('imagess', thumbnail);
      formData.append('upload_preset', 'images')
      console.log(formData,"ooooooooooooooooooo");
      await  axios.post('https://api.cloudinary.com/v1_1/dhwdphigu/image/upload', formData)
      const data = {
        productName:body.productName,
        productDescription:body.productDescription,
        productCategory:body.productCategory,
        ageCategory:body.ageCategory,
        free:body.free,
        // thumbnail:thumbnail,
        // source:source
      }

      console.log(data,";;;;;;;------------;;;;;");
      console.log(thumbnail,source,"aaaaaaaaaaaaaaaaaaafterrrrrrrrrrrrr");

    
      const response = await axios.post('admin/addProducts',data)
      console.log(response,"uuuuuuuuuuuuuuuuuu");
      // const sourceFileType = determineFileType(source.name);
      // console.log(sourceFileType,"typoooooooooooooooooo");
      
// now i need to store it into s3 bucket
// const s3 = new AWS.S3();
// const thumbnailUploadParams = {
//   Bucket: "mentoons",
//   Key: images/${thumbnail.name}, // Update the folder name as needed
//   Body: thumbnail,
// };


// const sourceUploadParams = {
//   Bucket: "mentoons",
//   Key: ${sourceFileType}/${source.name}, // Dynamic folder based on file type
//   Body: source,
// };
// try {
//   const thumbnailUploadResult = await s3.upload(thumbnailUploadParams).promise();
//   const sourceUploadResult = await s3.upload(sourceUploadParams).promise();
//   console.log(thumbnailUploadResult,sourceUploadResult,"resiiiiiiiiiiiiiiii");
//   // ... (unchanged)
// } catch (error) {
//   console.error("Error uploading files to S3", error);
// }


    }else{
      console.log("please select two medias")
    }
  }
  });


 
  return (
    <div className="main-item-adding">
      <h1> Add your Product item </h1>
      <form onSubmit={formik.handleSubmit} 
      className="itemsadding-form" 
      encType="multipart/form-data" >
        <input
          type="text"
          placeholder="Enter Product Name"
          id="productName"
          name="productName"
          value={formik.values.productName}
          onChange={formik.handleChange}
        />
        <br></br>
        <input
          type="text"
          id="productDescription"
          name="productDescription"
          placeholder="Enter Product Description"
          value={formik.values.productDescription}
          onChange={formik.handleChange}
        />
<br></br>
         <div className="age-cat">
          <label>Category</label>
          <select id="ageCategory" 
          name="ageCategory"
          value={formik.values.ageCategory}
          onChange={formik.handleChange}>

            <option value="Comic">Comic</option>
            <option value="AudioComic">Audio-Comic</option>
            <option value="Podcast">Podcast</option>
            <option value="Workshop">Workshop</option>
  
          </select>
        </div>
        <br></br>
        <div className="age-cat">
          <label>Age Category</label>
          <select id="ageCategory" 
          name="ageCategory"
          value={formik.values.ageCategory}
          onChange={formik.handleChange}>

            <option value="6-10">6-10</option>
            <option value="10-12">10-12</option>
            <option value="13-17">13-17</option>
            <option value="17-19">17-19</option>
            <option value="20+">20+</option>
            <option value="parentsorcarers">parents or carers</option>
          </select>
        </div>

        <br></br>
        {/* <div className="video">
          <label>Video </label>
          <input type="file"
         
          id="video"
          name="video"
          onChange={handleChange} />
        </div>

        <br></br> */}

        <div className="pdf">
          <label>source </label>
          <input type="file"
          
          id="source" 
           name="source" 
           
           onChange={handleControll} 
            />
        </div>

        <div className="pdf">
          <label>thumbnail </label>
          <input type="file"
         
          id="image" 
           name="image" 
         
           onChange={handleChange} 
            />
        </div>

        <br></br>
        <input type="text"
        id="free" name="free"
         placeholder="free"
          value={formik.values.free}  onChange={formik.handleChange} />
        <br></br>
        <input
          type="text"
          id="price" name="price"
          placeholder="Enter Product Price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <button type="submit"
        
        > Submit</button>
      </form>
    </div>
  );
};

export default Productitems;