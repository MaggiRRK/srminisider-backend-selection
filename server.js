const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

const filePath = path.join(__dirname, "data", "items.json");


function readData() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}


function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}


app.get("/items", (req, res) => {
    try {
        const items = readData();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error reading data" });
    }
});


app.post("/items", (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are required"
            });
        }

        const items = readData();

        
        const newItem = {
            id: Date.now().toString(),
            title,
            description,
            createdAt: new Date()
        };

        items.push(newItem);
        writeData(items);

        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Error adding item" });
    }
});

app.delete("/items/:id", (req, res) => {
    try {
        const { id } = req.params;

        const items = readData();

        const filteredItems = items.filter(item => item.id !== id);

        if (items.length === filteredItems.length) {
            return res.status(404).json({ message: "Item not found" });
        }

        writeData(filteredItems);

        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting item" });
    }
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});