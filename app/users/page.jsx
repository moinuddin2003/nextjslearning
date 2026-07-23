import { setTimeout } from "timers/promises";

function fetchProducts() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Clothes" },
        { id: 2, name: "Basket" },
        { id: 3, name: "Food" },
      ]);
    }, 3000);
  });
}

function fetchUsers() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, email: "m@gmail.com" },
        { id: 2, email: "mo@gmail.com" },
        { id: 3, email: "moi@gmail.com" },
      ]);
    }, 3000);
  });
}

export default async function users() {
  const [products, users] = await Promise.all([fetchProducts(), fetchUsers]);
  console.log(users, products);

  return (
    <ul>
      
    </ul>
  )


}
