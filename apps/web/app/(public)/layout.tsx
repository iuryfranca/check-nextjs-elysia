import "@workspace/ui/globals.css";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			Public
			{children}
		</div>
	);
}
