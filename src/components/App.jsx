import "./App.css";
import Profile from "./Profile";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <p>Завдання 1. Профіль соціальної мережі</p>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <p>Завдання 2. Список друзів</p>
      <FriendList friends={friends} />
      <p>Завдання 3. Історія транзакцій</p>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
