import "@workspace/ui/globals.css";

export default function PrivateLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			Private
			{children}
		</div>
	);
}
