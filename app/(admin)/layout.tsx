// app/(admin)/layout.js
export default function AdminLayout({ children }:  Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div className="max-w-[100%] mx-auto  md:p-10 p-5 py-10 bg-[#1C1611] rounded-xl my-5">
{children}
</div>
  );
}