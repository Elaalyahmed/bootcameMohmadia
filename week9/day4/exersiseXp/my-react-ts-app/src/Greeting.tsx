interface GreetingProps {
  name: string;
  messageCount: number;
}

export const Greeting = ({ name, messageCount }: GreetingProps) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You have {messageCount} unread messages.</p>
    </div>
  );
};