import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

interface BarcodeScannerProps {
	onScan: (decodedText: string, decodedResult: any) => void;
	onError: (error: any) => void;
}
const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onScan, onError }) => {
	const [shouldScan, setShouldScan] = useState<boolean>(true);

	useEffect(() => {
		if (!shouldScan) return;

		const html5QrcodeScanner = new Html5QrcodeScanner(
			"barcode-scanner",
			{
				fps: 10,
				qrbox: { width: 250, height: 250 },
				showTorchButtonIfSupported: true,
				showZoomSliderIfSupported: true,
			},
			false
		);

		const handleScan = (decodedText: string, decodedResult: any) => {
			setShouldScan(false); // Stop scanning after first successful scan
			onScan(decodedText, decodedResult);
		};

		html5QrcodeScanner.render(handleScan, onError);
		return () => {
			html5QrcodeScanner.clear().catch(console.error);
		};
	}, [onScan, onError, shouldScan]);

	return <div id="barcode-scanner" />;
};

export default BarcodeScanner;
