<!DOCTYPE html>
<html lang="en">
<head>
    <title> Edit Product </title>
</head>
<body>
    <h1>Edit Product</h1>
    
    <form action="{{ url('/products', $product->id) }}" method="POST">
        @csrf
        @method('PUT')
        <p>Name: <input type="text" name="name" value="{{ $product->name }}" required></p>
        <p>Description: <textarea name="description">{{ $product->description }}</textarea></p>
        <p>Price: <input type="number" name="price" value="{{ $product->price }}" required></p>
        <p>Stock: <input type="number" name="stock" value="{{ $product->stock }}" required></p>
        <button type="submit">Update</button>
    </form>

    <a href="{{ url('/products') }}">⬅ Back</a>
</body>
</html>
