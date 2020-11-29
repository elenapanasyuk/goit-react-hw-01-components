import PaintingList from './components/Painting/PaintingList';
import Container from './components/Container/Container';
import SocialProfile from './components/SocialProfile/SocialProfile';
import user from './components/SocialProfile/user.json';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import statisticalData from './components/Statistics/statistical-data.json';
import paintings from './painting.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <Container>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
