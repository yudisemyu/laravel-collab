<!DOCTYPE html>
<html lang="en">
<head>
    <title> Add New Product </title>
</head>
<body>
    <h1>Add New Product</h1>
    
    <form action="{{ url('/products') }}" method="POST">
        @csrf
        <p>Name: <input type="text" name="name" required></p>
               <p>Description: <textarea name="description"></textarea></p>
        <p>Price: <input type="number" name="price" required></p>
        <p>Stock: <input type="number" name="stock" required></p>
        <button type="submit">Save</button>
    </form>

    <a href="{{ url('/products') }}">⬅ Back</a>
</body>
</html>
