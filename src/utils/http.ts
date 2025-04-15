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

type Credentials = { email: string; password: string };

export async function post<T>(url: string, user: Credentials) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("fail to fetch data");
  }

  const data = response.json() as unknown; //"as unknown" no get error :) use It!
  return data as T; //Do not forget this :)
}
