// app/(admin)/layout.js
export default function AdminLayout({ children }:  Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div className="max-w-[100%] mx-auto  bg-defjam-text my-5">
{children}
</div>
  );
}