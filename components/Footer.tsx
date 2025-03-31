export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Fiscet by Christian Zanchetta. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
