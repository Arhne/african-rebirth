import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./style.module.scss";
import BarcodeScanner from "./barcode-scanner";

const ProductScanner: React.FC = () => {
	const searchParam = useSearchParams();
	const router = useRouter();
	const storeId = searchParam.get("id");

	const handleScan = (decodedText: string, decodedResult: any) => {
		router.push(`/stores/${storeId}/product-category/all/${decodedText}`);
	};

	const handleError = (error: any) => {
		//console.error("Scan error:", error);
	};

	return (
		<div className={style.Product_Scanner}>
			<div className={style.content}>
				<div className={style.header_text}>
					<p className={style.title}>Scan Product</p>
					<p className={style.paragraph}>
						Scan the items barcode to add items to your cart
					</p>
				</div>
				<div className={style.scanner_wrap}>
					<div className={style.border1} />
					<div className={style.border2} />
					<BarcodeScanner onScan={handleScan} onError={handleError} />
					<div className={style.border3} />
					<div className={style.border4} />
				</div>
        <p
          className={style.paragraph}
          onClick={() => router.push(`/stores/${storeId}/product-category`)}
        >
          Can&apos;t scan a product? <span>Click Here</span> to search product
          by name/header text
        </p>
			</div>
		</div>
	);
};

export default ProductScanner;
