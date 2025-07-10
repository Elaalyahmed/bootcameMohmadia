interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  } else {
    console.log("Membership Level: Not specified");
  }
}

// ✅ Test
const user1: PremiumUser = {
  id: 101,
  name: "Ali",
  email: "ali@example.com",
  membershipLevel: "Gold"
};

const user2: PremiumUser = {
  id: 102,
  name: "Mona",
  email: "mona@example.com"
};

printUserDetails(user1);
printUserDetails(user2);
