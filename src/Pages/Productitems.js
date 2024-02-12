import React from "react";
import "../pagecss/Productitems.css";
import { useFormik } from "formik";
import axios from '../api/Baseurl.js';

const Productitems = () => {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productDescription: "",
      productCategory: "",
      ageCategory: "",
      price: "",
      free: "",
      selectedThumbnailFile: null,
      selectedSourceFile:null
    },
    onSubmit: async () => {
      try {
        const formData = new FormData();
        formData.append('productName', formik.values.productName);
        formData.append('productDescription', formik.values.productDescription);
        formData.append('productCategory', formik.values.productCategory);
        formData.append('ageCategory', formik.values.ageCategory);
        formData.append('price', formik.values.price);
        formData.append('free', formik.values.free);
        formData.append('thumbnail', formik.values.selectedThumbnailFile);
        formData.append('source', formik.values.selectedSourceFile);

        console.log(formData,"formData coming frontendd");
        const response = await axios.post('/admin/addProducts',formData);
        console.log(response.data);
      } catch (err) {
        console.error("Error submitting form:", err);
      }
    },
  });

  return (
    <div className="main-item-adding">
      <h1>Add your Product item</h1>
      <form onSubmit={formik.handleSubmit} className="itemsadding-form">
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
          <select id="productCategory" name="productCategory" value={formik.values.productCategory} onChange={formik.handleChange}>
            <option value="Comic">Comic</option>
            <option value="AudioComic">Audio-Comic</option>
            <option value="Podcast">Podcast</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>
        <br></br>
        <div className="age-cat">
          <label>Age Category</label>
          <select id="ageCategory" name="ageCategory" value={formik.values.ageCategory} onChange={formik.handleChange}>
            <option value="6-10">6-10</option>
            <option value="10-12">10-12</option>
            <option value="13-17">13-17</option>
            <option value="17-19">17-19</option>
            <option value="20+">20+</option>
            <option value="parentsorcarers">parents or carers</option>
          </select>
        </div>
        <br></br>
        <div className="pdf">
          <label>Thumbnail</label>
          <input type="file" name="thumbnail" id="thumbnail" onChange={(event) => formik.setFieldValue('selectedThumbnailFile', event.target.files[0])} />
        </div>
        <br></br>
        <div className="pdf">
          <label>source</label>
          <input type="file" name="source" id="source" onChange={(event) => formik.setFieldValue('selectedSourceFile', event.target.files[0])} />
        </div>
        <br></br>
        <input type="text" id="free" name="free" placeholder="free" value={formik.values.free} onChange={formik.handleChange} />
        <br></br>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Enter Product Price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Productitems;