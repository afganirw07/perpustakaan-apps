export async function ApiFetch(path: string, options: RequestInit = {}) {
    const baseUrl = process.env.EXPO_PUBLIC_API_URL
    const token = process.env.EXPO_PUBLIC_SECRET_ACCESS_TOKEN

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...options.headers,
    };

    const res = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers,
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("Fetch error:", res.status, text);
        throw new Error(`HTTP ${res.status}: ${text}`);
    }

    return res.json();
}