export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-blue-100 border-t-medBlue animate-spin" />
      <p className="text-sm text-gray-500">Loading Amaris Medical Clinic…</p>
    </div>
  );
}
