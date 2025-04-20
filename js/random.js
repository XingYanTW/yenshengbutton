const fs = require('fs');
const path = require('path');

function getRandomName() {
    const filePath = path.join(__dirname, '..', 'sounds', 'name.txt');

    try {
        // 讀取檔案內容
        const data = fs.readFileSync(filePath, 'utf-8');
        // 將內容分割成行
        const lines = data.split('\n').filter(line => line.trim() !== '');
        // 隨機選取一行
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        return randomLine;
    } catch (error) {
        console.error('Error reading the file:', error);
        return null;
    }
}

// 測試函式
//getRandomName();