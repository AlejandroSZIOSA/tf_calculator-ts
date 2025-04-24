//CRUD FRONTEND OPERATIONS

export async function get<T>(url: string, token: string) {
  const response = await fetch(url, {
    headers: {
      method: "GET",
      Authorization: `Bearer ${token as string}`, //Fix
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

//OBJECTIVE: MAKE THIS FUNCTION MORE REUSABLE AND THEN REMOVE THE PUT FN
//DONE: 1- ADD "METHOD" AS "PROP"
//TODO: 2- ADD "FAIL VALIDATION CODES" FOR "LOGIN AND SIGNUP" ACTIONS
export async function post<T>(url: string, method: string, user: Credentials) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  //WORK HERE
  if (!response.ok) {
    throw new Error("fail to login User");
  }

  const data = response.json() as unknown; //"as unknown" no get error :) use It!
  return data as T; //Do not forget this :)
}

export async function put<T>(url: string, user: Credentials) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    if (response.status === 422) {
      throw new Error("User already exists");
    }
    throw new Error("Fail to Sign Up User");
  }

  const data = response.json() as unknown; //"as unknown" no get error :) use It!
  return data as T; //Do not forget this :)
}
