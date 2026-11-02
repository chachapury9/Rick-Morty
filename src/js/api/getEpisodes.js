export async function getData(url) {
  const response = await fetch(url);

  try {
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}
