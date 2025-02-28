# 📌 Project Overview

This project is a web-based spreadsheet application that mimics the functionality of Google Sheets. It supports cell formatting, mathematical functions, drag-and-drop operations, multi-cell selection, and formula evaluations.

# 🚀 Features Implemented

✅ Core Features

Spreadsheet Grid: Interactive UI for adding and managing data.

Formula Support: Built-in formulas such as SUM, AVERAGE, COUNT, MAX, MIN, UPPER, LOWER, TRIM, FIND_AND_REPLACE.

Cell Formatting: Bold, Italic, Underline, Font Size, Font Color.

Drag & Drop: Move cell content, formulas, and values seamlessly.

Auto-Fill: Detects number sequences and extends them.

Row & Column Management: Add, delete, resize.

Data Persistence: Saves state in localStorage.

🎯 Bonus Features

Chart Generation: Create simple charts from selected data.

Formula Dependency Handling: Cells update dynamically when dependent cells change.

Multi-Cell Selection: Drag selection for bulk operations.

# 📂 Project Structure

//Image

🛠️ Tech Stack Used

# Frontend:

React.js - Used for building the user interface efficiently with reusable components.

Tailwind CSS - Provides fast, utility-based styling for responsive design.

Context API - Manages global state for spreadsheet data and cell properties.

Data Handling & Storage:

JavaScript - Used for formula calculations, event handling, and dynamic cell updates.

localStorage - Ensures spreadsheet data persists across sessions.

Charting Library:

Chart.js - Generates data visualizations from spreadsheet data.

Why This Stack?

React.js + Context API → Provides a scalable & modular approach to UI development.

Tailwind CSS → Ensures fast, responsive styling without writing too much custom CSS.

localStorage → Allows persistent state without requiring a backend.

Chart.js → Provides easy-to-use charting for data visualization.

📊 Data Structures Used

1. 2D Array (Grid Representation)

Data Structure: grid[row][col]

Stores spreadsheet data in a 2D array.

Access: grid[3][5] retrieves the value of cell (3,5).

2. Object (Cell Formatting & Styles)

Data Structure: { cellKey: { bold: true, fontSize: "16px", color: "#ff0000" } }

Each cell has a unique key (row-col format).

Used to store cell-specific formatting (bold, italic, colors).

3. Set (Multi-Cell Selection)

Data Structure: Set({ row: 2, col: 3 })

Stores selected cells for bulk operations.

Prevents duplicate entries for efficiency.

4. Object (Formula Parsing & Dependencies)

Data Structure: { cellKey: "=SUM(A1:A5)" }

Stores formulas with cell references.

Updates dependent cells when referenced values change.

# 🚀 Future Enhancements

Collaborative Editing (Real-time updates via WebSockets)

File Import/Export (Support for CSV/Excel)

Right-Click Context Menu (Cut, Copy, Paste, Insert Row/Column)

Dark Mode Support

# 📜 Installation & Setup

# Clone the repository
git clone https://github.com/yourusername/react-google-sheets-clone.git
cd react-google-sheets-clone

# Install dependencies
npm install

# Start the development server
npm run dev

#happyCoding
