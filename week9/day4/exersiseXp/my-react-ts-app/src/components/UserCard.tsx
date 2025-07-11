interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

export const UserCard = ({ 
  name = 'Anonymous', 
  age = 0, 
  role = 'Guest' 
}: UserCardProps) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};