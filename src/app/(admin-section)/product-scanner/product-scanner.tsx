import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./style.module.css";
import BarcodeScanner from "./barcode-scanner";

const ProductScanner: React.FC = () => {
	const searchParam = useSearchParams();
	const router = useRouter();
	const storeId = searchParam.get("id");

	const handleScan = (decodedText: string, decodedResult: any) => {
		const valueObject: IDelegates = JSON.parse(decodedResult.decodedText)
	
		router.push(`/admin/view/${valueObject.id}`)
	};

	const handleError = (error: any) => {
		//console.error("Scan error:", error);
	};

	return (
		<div className={style.Product_Scanner}>
			<div className={style.content}>
				<div className={style.header_text}>
					<p className={style.title}>Scan Delegate</p>
					<p className={style.paragraph}>
						Scan the Delegates QR code to check details
					</p>
				</div>
				<div className={style.scanner_wrap}>
					<div className={style.border1} />
					<div className={style.border2} />
					<BarcodeScanner  onScan={handleScan} onError={handleError} />
					<div className={style.border3} />
					<div className={style.border4} />
				</div>
        <p
          className={style.paragraph}
          onClick={() => router.refresh()}
        >
          Can&apos;t scan a Delegate? <span className={style.spanBody} >Click Here</span> to refresh scanner
        </p>
			</div>
		</div>
	);
};

export default ProductScanner;
