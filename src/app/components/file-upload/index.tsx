import React, { useEffect, useRef, useState } from "react";
import style from "./file-upload.module.css";
import { FileUploadIcon } from "@/assets";
import Image from "next/image";

interface IFileUpload {
  header?: string;
  title?: string;
  onChange: (url: string) => void;
  isEditUserProfile?: boolean;
  editValue?: string;
}

export const FileUploadComp = ({ 
  header = "Thumbnail", 
  title = "Photo", 
  onChange, 
  editValue, 
  isEditUserProfile = false 
}: IFileUpload) => {
  

  return (
    <div className={style.FileUploader}>
      <input type="file" style={{ display: "none" }} />
      <p className={style.header}>{header}</p>
      <div className={style.content}>
        <p className={style.title}>{title}</p>
        <div className={style.imageContainer}>
          <div className={style.logo}>
            {/* {imageUrl ? <Image src={imageUrl} alt={fileName} width={100} height={100} /> : <FileUploadIcon />} */}
          </div>
          <p className={style.paragraph}>
            {/* {isLoading ? "Loading...." : <>{imageUrl ? fileName : "click here to add image"}</>} */}
          </p>
          <button className={style.button}>
            {/* {imageUrl ? "Edit Image" : "Add Image"} */}
          </button>
        </div>
      </div>
    </div>
  );
};
