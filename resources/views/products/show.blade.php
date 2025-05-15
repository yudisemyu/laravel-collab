<!DOCTYPE html>
<html lang="en">
<head>
    <title> Product Details </title>
</head>
<body>
    <h1> Product Details </h1>
    <p><strong>ID:</strong> {{ $product->id }}</p>
    <p><strong>Name:</strong> {{ $product->name }}</p>
    <p><strong>Description:</strong> {{ $product->description }}</p>
    <p><strong>Price:</strong> ${{ $product->price }}</p>
    <p><strong>Stock:</strong> {{ $product->stock }}</p>
    <a href="{{ url('/products') }}">Back to Products</a>
</body>
</html>
