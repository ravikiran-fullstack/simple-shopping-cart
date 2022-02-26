import React from "react";

const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0);

  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  console.log(itemsPrice);
  return (
    <aside className='col-1 block'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          <div>
            {cartItems.map((item) => {
              return (
                <div key={item.id} className='row'>
                  <div className='col-2'>{item.name}</div>
                  <div className='col-2'>
                    <button onClick={() => onAdd(item)} className='add'>
                      +
                    </button>
                    <button onClick={() => onRemove(item)} className='remove'>
                      -
                    </button>
                  </div>
                  <div className='col-2 text-right'>
                    {item.qty} x ${item.price.toFixed(2)}
                  </div>
                </div>
              );
            })}
            {cartItems.length !== 0 && (
              <>
                <hr />
                <div className='row'>
                  <div className='col-2'>Items Price</div>
                  <div className='col-1'>{itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                  <div className='col-2'>Tax Price</div>
                  <div className='col-1'>{taxPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                  <div className='col-2'>Shipping Price</div>
                  <div className='col-1'>{shippingPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                  <div className='col-2'>Total Price</div>
                  <div className='col-1'>{totalPrice.toFixed(2)}</div>
                </div>
                <hr />
                <div>
                  <button>Checkout</button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Basket;
