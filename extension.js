// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    vscode.window.showInformationMessage(`Zesty content editor active!`)

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json    
    let workspace = vscode.workspace
    
    vscode.commands.registerCommand('extension.saveContent', function() {
        const fileType = vscode.window.activeTextEditor.document.languageId
        const configFilename = `zesty.json` 
        
        workspace.findFiles(configFilename).then((uris) => {            
            if (uris.length == 1) {
                const configFilepath = uris[0].path
                const configJSON = require(configFilepath) 
                return configJSON
            } else {
                vscode.window.showErrorMessage(`${configFilename} does not exist`)
                return 
            }
        }).then((config) => {
            switch (fileType) {
                case "html":
                    vscode.window.showInformationMessage(`Saving view to ${config.instanceZUID}`);        
                    break;
                case "css":
                case "scss":
                case "less":
                    vscode.window.showInformationMessage(`Saving stylesheet to ${config.instanceZUID}`);        
                    break;
                case "javascript":
                    vscode.window.showInformationMessage(`Saving script to ${config.instanceZUID}`);        
                    break;
                default:
                    vscode.window.showInformationMessage(`Unable to save file to ${config.instanceZUID}: wrong filetype`)
                    break;
            }
        })

    })

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;