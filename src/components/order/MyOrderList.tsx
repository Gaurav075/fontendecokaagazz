import React, { useState, useEffect, useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { Package, Calendar, CreditCard, MapPin, Eye, RefreshCw } from 'lucide-react';
import { AuthContext } from '../../context/authContext';

interface OrderProduct {
  productId: string;
  title: string;
  quantity: number;
  price: number;
}

interface PaymentInfo {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface ShippingAddress {
  name: string;
  phone: string;
  address: string;
  email: string;
}

interface Order {
  _id: string;
  orderNumber?: string;
  userId: string;
  products: OrderProduct[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentInfo: PaymentInfo;
  shippingAddress: ShippingAddress;
  createdAt: string;
  updatedAt: string;
}

const MyOrderList: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to view your orders');
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/my-order`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        setOrders(data.orders || []);
      } else {
        setError(data.message || 'Failed to fetch orders');
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'delivered':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'pending':
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const openOrderModal = (order: Order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeOrderModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ClipLoader color="#3C2F2F" loading={true} size={35} />
          <p className="mt-4 text-gray-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
              <p className="text-gray-600 mt-1">Track and manage your orders</p>
            </div>
            <button
              onClick={fetchOrders}
              className="flex items-center gap-2 bg-[#3C2F2F] hover:bg-[#2D2323] text-white px-4 py-2 rounded-lg transition-colors"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
          </div>
        </div>


        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-800">{error}</p>
            <button
              onClick={fetchOrders}
              className="mt-2 text-red-600 hover:text-red-800 font-medium"
            >
              Try Again
            </button>
          </div>
        )}


        {orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Package size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Orders Yet</h3>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start shopping to see your orders here!</p>
            <button
              onClick={() => window.location.href = '/products'}
              className="inline-flex items-center gap-2 bg-[#3C2F2F] hover:bg-[#2D2323] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Package size={16} />
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Order #{order.orderNumber || order._id.slice(-8)}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{formatDate(order.createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package size={16} />
                          <span>{order.products.length} {order.products.length === 1 ? 'item' : 'items'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard size={16} />
                          <span className="font-semibold text-gray-900">₹{order.totalAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

             
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openOrderModal(order)}
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Eye size={16} />
                        View Details
                      </button>
                    </div>
                  </div>

       
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {order.products.slice(0, 3).map((product, index) => (
                        <div key={index} className="bg-gray-50 px-3 py-1 rounded-lg text-sm text-gray-700">
                          {product.title} (x{product.quantity})
                        </div>
                      ))}
                      {order.products.length > 3 && (
                        <div className="bg-gray-100 px-3 py-1 rounded-lg text-sm text-gray-600">
                          +{order.products.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showModal && selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Order Details #{selectedOrder.orderNumber || selectedOrder._id.slice(-8)}
                  </h3>
                  <button
                    onClick={closeOrderModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
        
                <div className="flex items-center justify-between">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(selectedOrder.status)}`}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </span>
                  <div className="text-right text-sm text-gray-600">
                    <p>Order Date: {formatDate(selectedOrder.createdAt)}</p>
                    <p>Last Updated: {formatDate(selectedOrder.updatedAt)}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Items Ordered</h4>
                  <div className="space-y-3">
                    {selectedOrder.products.map((product, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h5 className="font-medium text-gray-900">{product.title}</h5>
                          <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">₹{(product.price * product.quantity).toLocaleString()}</p>
                          <p className="text-sm text-gray-600">₹{product.price.toLocaleString()} each</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin size={18} />
                    Shipping Address
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900">{selectedOrder.shippingAddress.name}</p>
                    <p className="text-gray-600">{selectedOrder.shippingAddress.email}</p>
                    <p className="text-gray-600">{selectedOrder.shippingAddress.phone}</p>
                    <p className="text-gray-600 mt-2">{selectedOrder.shippingAddress.address}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CreditCard size={18} />
                    Payment Information
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment ID:</span>
                      <span className="font-mono text-sm">{selectedOrder.paymentInfo.razorpay_payment_id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order ID:</span>
                      <span className="font-mono text-sm">{selectedOrder.paymentInfo.razorpay_order_id}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-semibold text-gray-900">Total Amount:</span>
                      <span className="font-bold text-lg text-gray-900">₹{selectedOrder.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrderList;