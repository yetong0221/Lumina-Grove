export interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  desc: string;
  image: string;
  details?: string;
  category?: 'subscription' | 'product';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderItem extends CartItem {}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  date: string;
  status: 'PAID' | 'PENDING';
}
