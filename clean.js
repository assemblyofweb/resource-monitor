const fs = require('fs');
const path = require('path');

// List of directories to remove
const directoriesToRemove = [
    'node_modules',
    'build',
    'dist',
    '.idea'
];

// Function to delete a directory
function deleteDirectory(targetPath) {
    if (fs.existsSync(targetPath)) {
        fs.rmSync(targetPath, { recursive: true, force: true });
        console.log(`Deleted directory: ${targetPath}`);
    }
}

// Function to recursively clean up specified directories
function cleanUp(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);

        if (fs.lstatSync(fullPath).isDirectory() && directoriesToRemove.includes(file)) {
            deleteDirectory(fullPath);
        } else if (fs.lstatSync(fullPath).isDirectory()) {
            cleanUp(fullPath);
        }
    });
}

// Run the cleanup process starting from the current directory
cleanUp(__dirname);
