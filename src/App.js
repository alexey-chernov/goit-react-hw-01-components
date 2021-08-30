import Profile from "./Components/social-profile/Profile";
import user from "./Components/social-profile/user.json";
import statisticalData from "./Components/statistics/statistical-data.json";
import Statistics from "./Components/statistics/Statistics";
import friends from "./Components/friend-list/friends.json";
import FriendList from "./Components/friend-list/FriendList";
import transactions from "./Components/transaction-history/transactions.json";
import TransactionHistory from "./Components/transaction-history/TransactionsHistory";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
