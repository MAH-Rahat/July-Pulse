<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add News Article</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Add News Article</h1>
    </header>
    
    <div id="content">
        <form action="submit_article.php" method="POST" enctype="multipart/form-data">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            
            <label for="image">Image:</label>
            <input type="file" id="image" name="image" accept="image/*" required>
            
            <label for="content">Content:</label>
            <textarea id="content" name="content" rows="5" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
    </div>
    
    <footer>
        <p>&copy; 2023 July Pulse</p>
    </footer>
</body>
</html>