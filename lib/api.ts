type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

/* ================= TOKEN HELPERS ================= */

function getSellerToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("seller_token");
}

function getCustomerToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("customer_token");
}

/* ================= CORE REQUEST ================= */

async function request<T>(
  path: string,
  method: HttpMethod,
  body?: any,
  tokenType?: "seller" | "customer",
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token =
    tokenType === "seller"
      ? getSellerToken()
      : tokenType === "customer"
        ? getCustomerToken()
        : null;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : null;

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data as T;
}

/* ================= SELLER API ================= */

export const sellerApi = {
  get<T>(path: string) {
    return request<T>(`/api/seller/v1${path}`, "GET", undefined, "seller");
  },

  post<T>(path: string, body?: any) {
    return request<T>(`/api/seller/v1${path}`, "POST", body, "seller");
  },

  put<T>(path: string, body?: any) {
    return request<T>(`/api/seller/v1${path}`, "PUT", body, "seller");
  },

  delete<T>(path: string) {
    return request<T>(`/api/seller/v1${path}`, "DELETE", undefined, "seller");
  },
};

/* ================= CUSTOMER API ================= */

export const customerApi = {
  get<T>(path: string) {
    return request<T>(`/api/customer/v1${path}`, "GET", undefined, "customer");
  },

  post<T>(path: string, body?: any) {
    return request<T>(`/api/customer/v1${path}`, "POST", body, "customer");
  },

  put<T>(path: string, body?: any) {
    return request<T>(`/api/customer/v1${path}`, "PUT", body, "customer");
  },

  delete<T>(path: string) {
    return request<T>(
      `/api/customer/v1${path}`,
      "DELETE",
      undefined,
      "customer",
    );
  },
};
