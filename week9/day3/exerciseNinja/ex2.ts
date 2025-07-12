// Rename to ApiResponse to avoid conflict with built-in Response
// Create a separate module to avoid conflicts
export {};

interface Response<T> {
    status: number;
    message: string;
    data: T;
    timestamp: Date;
}

interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
    timestamp: Date;
}

function parseResponse<T>(response: unknown): ApiResponse<T> {
    if (typeof response === 'object' && response !== null) {
        const res = response as { 
            status?: number, 
            message?: string, 
            data?: T, 
            timestamp?: string 
        };
        
        if (res.status !== undefined && res.message !== undefined && res.data !== undefined) {
            return {
                status: res.status,
                message: res.message,
                data: res.data as T,
                timestamp: res.timestamp ? new Date(res.timestamp) : new Date()
            };
        }
    }
    throw new Error("Invalid response format");
}
interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
    timestamp: Date;
}

const apiResponse = {
    status: 200,
    message: "Success",
    data: { id: 1, name: "John Doe" },
    timestamp: "2023-05-15T10:00:00Z"
};

const parsed = parseResponse<{ id: number; name: string }>(apiResponse);
console.log(parsed.data.name); // "John Doe"