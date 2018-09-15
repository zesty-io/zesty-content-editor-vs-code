// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    vscode.window.showInformationMessage(`zesty content editor active!`)

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    vscode.commands.registerCommand('extension.saveView', function(){
        let fileType =vscode.window.activeTextEditor.document.languageId
        
        switch (fileType) {
            case "html":
                vscode.window.showInformationMessage('Saving view');        
                break;
            default:
                vscode.window.showInformationMessage("Unable to save file: file type must be javascript")
                break;
        }        
    });

    vscode.commands.registerCommand('extension.saveStylesheet', function(){
        let fileType =vscode.window.activeTextEditor.document.languageId
        
        switch (fileType) {
            case "css":
            case "scss":
            case "less":
                vscode.window.showInformationMessage('Saving stylesheet');        
                break;
            default:
                vscode.window.showInformationMessage("Unable to save file: file type must be either css, scss, less")
                break;
        }        
    });

    vscode.commands.registerCommand('extension.saveScript', function(){
        let fileType =vscode.window.activeTextEditor.document.languageId
        
        switch (fileType) {
            case "javascript":
                vscode.window.showInformationMessage('Saving script');        
                break;
        
            default:
                vscode.window.showInformationMessage("Unable to save file: file type must be javascript")
                break;
        }        
    });   
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;