const fs = require('fs');
const path = require('path');

// License text (Modify with your details)
const licenseText = `/*!
 * Copyright ©Jeremiah, 2024.
 * This code is proprietary and may not be copied, modified, or distributed without permission.
 * Unauthorized use will result in legal action.
 */\n\n`;

const licenseHTML = `<!--
Copyright ©Jeremiah.
Unauthorized use, copying, or modification is prohibited.
-->\n\n`;

const targetExtensions = ['.js', '.css', '.html']; // File types to modify

// Function to add license to files
const addLicenseToFiles = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            addLicenseToFiles(filePath); // Recursively process subdirectories
        } else if (targetExtensions.includes(path.extname(file))) {
            let content = fs.readFileSync(filePath, 'utf8');

            // Check if the file already contains the license
            if (!content.includes('Copyright ©')) {
                const newContent = (path.extname(file) === '.html') ? licenseHTML + content : licenseText + content;
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`✅ Added license to: ${filePath}`);
            } else {
                console.log(`🔹 License already exists in: ${filePath}`);
            }
        }
    });
};

// Run the script on the current project directory
addLicenseToFiles(__dirname);
