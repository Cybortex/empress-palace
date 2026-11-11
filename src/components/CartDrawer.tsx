"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Check } from "lucide-react";

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 250000;
  const progressToFreeShipping = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "EMPRESSVIP") {
      setPromoDiscount(0.15); // 15% VIP discount
      setPromoMessage("VIP 15% discount applied!");
    } else if (promoCode.trim().toUpperCase() === "CYBORTEX") {
      setPromoDiscount(0.2); // 20% partner discount
      setPromoMessage("Cybortex 20% privileged discount applied!");
    } else {
      setPromoDiscount(0);
      setPromoMessage("Invalid luxury invitation code.");
    }
  };

  const discountAmount = cartTotal * promoDiscount;
  const shippingCost = cartTotal >= freeShippingThreshold || cartTotal === 0 ? 0 : 25000;
  const finalTotal = cartTotal - discountAmount + shippingCost;

  const handlePlaceOrder = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        clearCart();
        setOrderComplete(false);
        closeCart();
      }, 3500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-[#241C20]/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF8F0] shadow-2xl flex flex-col border-l border-[#C6A15B]/40 animate-fade-in">
          {/* Header */}
          <div className="p-5 border-b border-[#C6A15B]/25 flex items-center justify-between bg-[#FFF8F0]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#A83263]" />
              <h3 className="font-serif text-lg tracking-wide text-[#241C20] font-semibold">
                Your Shopping Bag
              </h3>
              <span className="text-xs bg-[#E8A9BD]/30 text-[#A83263] px-2 py-0.5 rounded-full font-medium">
                {cart.length} {cart.length === 1 ? "piece" : "pieces"}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#241C20] hover:text-[#A83263] rounded-full hover:bg-[#E8A9BD]/20 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress */}
          <div className="bg-[#FFF8F0] px-5 py-3 border-b border-[#C6A15B]/15">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="text-[#241C20]">
                {cartTotal >= freeShippingThreshold ? (
                  <span className="text-[#A83263] font-semibold flex items-center gap-1">
                    Complimentary White-Glove Shipping Unlocked
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#A83263]">₦{amountToFreeShipping.toLocaleString()}</strong> for Free White-Glove Courier
                  </span>
                )}
              </span>
              <span className="text-[#C6A15B] font-bold">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full bg-[#E8A9BD]/30 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#A83263] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-[#C6A15B]/15">
            {orderComplete ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#A83263] text-white flex items-center justify-center animate-bounce">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="font-serif text-2xl text-[#241C20] font-bold">
                  Sovereign Gratitude
                </h4>
                <p className="text-xs text-[#241C20]/75 max-w-xs leading-relaxed">
                  Your luxury order has been received by our VIP fulfillment concierge.
                  A digital certificate and white-glove courier tracking details are being dispatched.
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#C6A15B] font-semibold">
                  Order REF: EP-{Math.floor(100000 + Math.random() * 900000)}
                </span>
              </div>
            ) : cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-[#241C20]/60">
                <div className="w-16 h-16 rounded-full bg-[#E8A9BD]/20 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-[#A83263]/60 stroke-[1.25]" />
                </div>
                <h4 className="font-serif text-lg text-[#241C20] font-medium">
                  Your shopping bag is empty
                </h4>
                <p className="text-xs max-w-xs leading-relaxed">
                  Explore our haute couture collections, artisanal traditional wear, and fine jewelry.
                </p>
                <Link
                  href="/fashion"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 bg-[#A83263] text-white text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-[6px] font-medium hover:bg-[#8C2450] transition-colors"
                >
                  <span>Explore Fashion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-start group">
                  {/* Thumbnail */}
                  <Link
                    href={`/shop/${item.product.slug}`}
                    onClick={closeCart}
                    className="relative w-20 h-24 shrink-0 rounded-[8px] overflow-hidden bg-[#E8A9BD]/20 border border-[#C6A15B]/30"
                  >
                    <Image
                      src={item.product.images.primary}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${item.product.slug}`}
                      onClick={closeCart}
                      className="font-serif text-sm text-[#241C20] font-semibold hover:text-[#A83263] transition-colors line-clamp-1"
                    >
                      {item.product.name}
                    </Link>

                    <div className="flex items-center gap-3 text-[11px] text-[#241C20]/70 mt-1">
                      <span>Color: {item.selectedColor}</span>
                      <span>•</span>
                      <span>Size: {item.selectedSize}</span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-[#C6A15B]/40 rounded-[4px] bg-white text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 px-2 text-[#241C20] hover:text-[#A83263] hover:bg-[#E8A9BD]/20"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-medium text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 px-2 text-[#241C20] hover:text-[#A83263] hover:bg-[#E8A9BD]/20"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price & Delete */}
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-sm font-semibold text-[#A83263]">
                          ₦{(item.unitPrice * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#241C20]/40 hover:text-red-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && !orderComplete && (
            <div className="p-5 border-t border-[#C6A15B]/30 bg-[#FFF8F0] space-y-3 shadow-inner">
              {/* Promo Code input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (e.g. EMPRESSVIP)"
                  className="text-xs uppercase bg-white border border-[#C6A15B]/40 px-3 py-2 rounded-[4px] flex-grow outline-none focus:border-[#A83263]"
                />
                <button
                  type="submit"
                  className="border border-[#C6A15B] text-[#241C20] hover:bg-[#C6A15B] hover:text-white px-3 py-2 text-xs uppercase tracking-wider rounded-[4px] font-medium transition-colors"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <p className={`text-[11px] font-medium ${promoDiscount > 0 ? "text-emerald-700" : "text-rose-700"}`}>
                  {promoMessage}
                </p>
              )}

              {/* Subtotal calculation */}
              <div className="space-y-1.5 pt-2 text-xs text-[#241C20]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">₦{cartTotal.toLocaleString()}</span>
                </div>
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-[#A83263]">
                    <span>VIP Privilege ({promoDiscount * 100}%)</span>
                    <span>-₦{discountAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>White-Glove Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? "Complimentary" : `₦${shippingCost.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-[#241C20] pt-2 border-t border-[#C6A15B]/20">
                  <span>Total Due</span>
                  <span className="text-[#A83263]">₦{finalTotal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={isCheckingOut}
                className="w-full bg-[#A83263] hover:bg-[#8C2450] text-white py-3.5 rounded-[6px] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-75"
              >
                {isCheckingOut ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Authorizing VIP Order...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-[#E8A9BD]" />
                    <span>Proceed To Secure Checkout</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#241C20]/60 tracking-wider pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>256-Bit Encrypted Luxury Checkout • Verified Authenticity</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
