// Define Interfaces
interface User {
    name: string;
    email: string;
}

interface Admin {
    adminLevel: number;
}

// Combine Interfaces
type AdminUser = User & Admin;

// Function with type guard
function getProperty(obj: AdminUser, prop: string): string | number | undefined {
    if (prop in obj) {
        return obj[prop as keyof AdminUser];
    }
    return undefined;
}

// Example usage
const adminUser: AdminUser = {
    name: "Jane Doe",
    email: "jane@example.com",
    adminLevel: 2
};

console.log(getProperty(adminUser, "name")); 
console.log(getProperty(adminUser, "adminLevel")); 
console.log(getProperty(adminUser, "invalid")); 