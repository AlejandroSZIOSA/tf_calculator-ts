export async function get<T>(url: string, token: string) {
  /*  console.log(TEST_TOKEN); */

  const response = await fetch(url, {
    headers: {
      method: "GET",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("fail to fetch data");
  }

  const data = response.json() as unknown; //"as unknown" no get error :) use It!
  return data as T; //Do not forget this :)
}
