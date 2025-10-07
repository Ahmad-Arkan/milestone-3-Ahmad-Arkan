// "use client";
// import { useCart } from "@/contexts/CartContext";

// export default function CartPage() {
//   const { cart, removeFromCart, clearCart } = useCart();

//   if (cart.length === 0)
//     return <p>Keranjang kosong. Ayo tambahkan produk!</p>;

//   return (
//     <section>
//       <h1>Keranjang Belanja</h1>
//       {cart.map((item) => (
//         <div key={item.id}>
//           <img
//             src={item.image}
//             alt={item.title}
//             width={100}
//             style={{ borderRadius: "8px" }}
//           />
//           <div>
//             <h3>{item.title}</h3>
//             <p>Jumlah: {item.quantity}</p>
//             <p>Harga: ${item.price}</p>
//             <button onClick={() => removeFromCart(item.id)}>Hapus</button>
//           </div>
//         </div>
//       ))}
//       <button onClick={clearCart}>Kosongkan Keranjang</button>
//     </section>
//   );
// }
