const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fs = require("fs");
var fileName = "";
var content = "";

var createFile = () => {
    fs.writeFile(fileName, content, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File saved successfully!");
        }
        repeat();
    });
};

var createDirWizard = () => {
    rl.question("Enter name of the directory: ", function (ans) {
        fs.mkdirSync(ans);
        repeat();
    });
};

var removeDirWizard = () => {
    rl.question("Enter name of the directory: ", function (ans) {
        fs.rmdirSync(ans);
        repeat();
    });
};

var writeFileWizard = () => {
    rl.question("Enter name of the file: ", function (ans) {
        fileName = ans + ".txt";
        rl.question("Enter contect of the file: ", function (ans) {
            content = ans;
            createFile();
        });
    });
};

var readFileWizard = () => {
    rl.question("Enter name of the file: ", function (ans) {
        fileName = ans + ".txt";
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) {
                console.log("File is not exist");
            } else {
                console.log("OK :" + fileName);
                console.log(data);
            }
            repeat();
        });
    });
};

var deleteFileWizard = () => {
    rl.question("Enter name of the file: ", function (ans) {
        fileName = ans + ".txt";
        fs.unlink(fileName, function (err) {
            if (err) {
                console.log("Sorry! File is not exist");
            } else {
                console.log('File deleted successfully!');
            }
        });
        repeat();
    });
};

var appendToWizard = () => {
    rl.question("Enter name of the file: ", function (ans) {
        fileName = ans + ".txt";
        rl.question("Enter contect of the file: ", function (ans) {
            content = ans;
            fs.appendFile(fileName, content, function (err) {
                if (err) {
                    console.log("Sorry! File is not exist");
                } else {
                    console.log('File appended successfully!');
                }
                repeat();
            });
        });
    });
};

var updateFileWizard = () => {
    rl.question("Enter name of the file: ", function (ans) {
        fileName = ans + ".txt";
        rl.question("Enter contect of the file: ", function (ans) {
            content = ans;
            fs.writeFile(fileName, content, function (err) {
                if (err) {
                    console.log("Sorry! File is not exist");
                } else {
                    console.log('File updated successfully!');
                }
                repeat();
            });
        });
    });
};

var renameFileWizard = () => {
    rl.question("Enter original file name: ", function (ans) {
        var replacedFileName = "";
        fileName = ans + ".txt";
        rl.question("Enter replaced file name: ", function (ans) {
            replacedFileName = ans + ".txt";
            fs.rename(fileName, replacedFileName, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Yuuppyyy! " + fileName + ".txt replaced with " + replacedFileName + ".txt");
                }
                repeat();
            });
        });
    });
};

var instruction = () => {
    console.log("1.  Create Directory ( Hint: fs.mkdir )");
    console.log("2.  Remove Directory ( Hint: fs.rmdir )");
    console.log("3.  Create and write File ");
    console.log("4.  Read File ");
    console.log("5.  Delete File");
    console.log("6.  Append data to file");
    console.log("7.  Update / Replace file with new data");
    console.log("8.  Rename File");
    console.log("9.  Exit");
};

var start = () => {
    rl.question("Enter your choice : ", (answer) => {
        if (answer == "1") {
            createDirWizard();
        } else if (answer == "2") {
            removeDirWizard();
        } else if (answer == "3") {
            writeFileWizard();
        } else if (answer == "4") {
            readFileWizard();
        } else if (answer == "5") {
            deleteFileWizard();
        } else if (answer == "6") {
            appendToWizard();
        } else if (answer == "7") {
            updateFileWizard();
        } else if (answer == "8") {
            renameFileWizard();
        } else if (answer == "9") {
            rl.close();
        } else {
            console.log("Please select valid choice");
            repeat();
        }
    });
};
var repeat = () => {
    instruction();
    start();
};
repeat();
