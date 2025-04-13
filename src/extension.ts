// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "dataset-visualizer" is now active!');

	// Register the command to open the Webview
	const disposable = vscode.commands.registerCommand('dataset-visualizer.openTable', () => {
		// Create and show a new Webview panel
		const panel = vscode.window.createWebviewPanel(
			'datasetVisualizer', // Identifies the type of the Webview panel
			'Dataset Visualizer', // Title of the panel
			vscode.ViewColumn.One, // Editor column to show the new Webview panel in
			{
				enableScripts: true, // Enable JavaScript in the Webview
			}
		);

		// Set the HTML content for the Webview
		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

// Function to generate the HTML content for the Webview
function getWebviewContent(): string {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Dataset Visualizer</title>
			<style>
				table {
					width: 100%;
					border-collapse: collapse;
				}
				th, td {
					border: 1px solid #ddd;
					padding: 8px;
					text-align: left;
				}
				th {
					background-color: #f4f4f4;
				}
			</style>
		</head>
		<body>
			<h1>Dataset Visualizer</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Item A</td>
						<td>100</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Item B</td>
						<td>200</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Item C</td>
						<td>300</td>
					</tr>
				</tbody>
			</table>
		</body>
		</html>
	`;
}
