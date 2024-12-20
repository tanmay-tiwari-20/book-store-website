import { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      if (data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      setErrorMessage("Failed to fetch products. Please try again.");
    }
  };

  const handleAddProduct = async () => {
    const newProduct = {
      title,
      author,
      isbn,
      category,
      description,
      price,
      stock,
      images: images.split(",").map((url) => url.trim()),
    };

    try {
      const response = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        setTitle("");
        setAuthor("");
        setIsbn("");
        setCategory("");
        setDescription("");
        setPrice("");
        setStock("");
        setImages("");
        fetchProducts();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Error adding product");
      }
    } catch (error) {
      setErrorMessage("Network error: Could not add product.");
    }
  };

  const handleUpdateProduct = async (id) => {
    const updatedProduct = {
      title,
      author,
      isbn,
      category,
      description,
      price,
      stock,
      images: images.split(",").map((url) => url.trim()),
    };

    const response = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    if (response.ok) {
      setEditingProductId(null);
      setTitle("");
      setAuthor("");
      setIsbn("");
      setCategory("");
      setDescription("");
      setPrice("");
      setStock("");
      setImages("");
      fetchProducts();
    }
  };

  const handleDeleteProduct = async (id) => {
    const response = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      fetchProducts();
    }
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product._id);
    setTitle(product.title);
    setAuthor(product.author);
    setIsbn(product.isbn);
    setCategory(product.category);
    setDescription(product.description);
    setPrice(product.price);
    setStock(product.stock);
    setImages(product.images.join(", "));
  };

  return (
    <div className="p-4 w-[90%] mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Product Management
      </h1>

      {errorMessage && (
        <div className="bg-red-500 text-white p-4 mb-4 rounded">
          {errorMessage}
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl mb-4">
          {editingProductId ? "Update Product" : "Add Product"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full sm:col-span-2"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Product Image URLs (comma separated)"
            value={images}
            onChange={(e) => setImages(e.target.value)}
            className="border p-2 w-full sm:col-span-2"
          />
        </div>
        <button
          onClick={
            editingProductId
              ? () => handleUpdateProduct(editingProductId)
              : handleAddProduct
          }
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          {editingProductId ? "Update Product" : "Add Product"}
        </button>
      </div>

      <h2 className="text-2xl mb-4">All Products</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="border p-2">Images</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">ISBN</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-100">
                  <td className="border p-2">
                    {product.images.length > 0 ? (
                      product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-16 h-16 object-cover mx-auto"
                        />
                      ))
                    ) : (
                      <span>No image</span>
                    )}
                  </td>
                  <td className="border p-2">{product.title}</td>
                  <td className="border p-2">{product.author}</td>
                  <td className="border p-2">{product.isbn}</td>
                  <td className="border p-2">{product.category}</td>
                  <td className="border p-2">INR {product.price}</td>
                  <td className="border p-2">{product.stock}</td>
                  <td className="border p-2 flex flex-col sm:flex-row gap-2 justify-center">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-4">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPage;
