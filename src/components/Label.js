export default function CreateLabel({ description, children }) {
  return (
    <label className="p-1 flex justify-center">
      <p className="w-1/4">{description}</p>
      {children}
    </label>
  );
}
