function CartOverview() {
  return (
    <div className="bg-stone-900 text-white flex items-center justify-between px-10 py-4 uppercase font-Robo">
      <p className="space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
