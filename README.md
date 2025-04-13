# Dataset Visualizer

Easily visualize datasets directly in Visual Studio Code! This extension supports interactive previews, chart generation, and seamless integration with Pandas DataFrames.

## Features

- **Interactive Table Previews**
  Quickly preview CSV and JSON files in an interactive table format.

- **Chart Generation**
  Generate bar, line, and scatter plots directly from your data.

- **Pandas DataFrame Support**
  Visualize Python Pandas DataFrames exported as CSV or JSON.

### Visual Examples

#### Table Preview
![Demo](images/demo-table.gif)

#### Chart Generation
![Demo](images/demo-chart.gif)

#### File Type Examples
<details>
<summary>CSV Example</summary>

```csv
name,age,score
Alice,30,85
Bob,25,90
```

</details>

<details>
<summary>JSON Example</summary>

```json
[
  { "name": "Alice", "age": 30, "score": 85 },
  { "name": "Bob", "age": 25, "score": 90 }
]
```

</details>

## Requirements

- **pnpm**: Install via `npm install -g pnpm`
- **esbuild**: Install via `pnpm add esbuild`

## Extension Settings

This extension contributes the following settings:

- `datasetVisualizer.previewMode`:
  Choose how to display previews: `"inline"` or `"side-panel"`.

- `datasetVisualizer.defaultChartType`:
  Set the default chart type: `"bar"`, `"line"`, or `"scatter"`.

## Quick Start

1. Open a CSV or JSON file in VS Code.
2. Right-click the file → **Preview Dataset**.
3. Use the sidebar to toggle between table view and chart options.

## Known Issues

- Large datasets may cause performance issues.
- Limited support for nested JSON structures.

Please report issues on [GitHub](https://github.com/your-repo/dataset-visualizer/issues). 🙏

## Release Notes

### 1.1.0

- 🚀 Added chart generation (bar, line, scatter).
- 🐛 Fixed table rendering for large CSV files.

### 1.0.0

- Initial release with table previews for CSV/JSON.

---

**Enjoy visualizing your datasets!**
