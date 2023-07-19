export default function getFieldValue(obj, path) {
  if (!path) {
    console.error("Path is undefined");
    return null;
  }
  const parts = path.split(".");
  let current = obj;

  for (const part of parts) {
    if (!current[part]) {
      return null;
    }

    current = current[part];
  }

  return current;
}
