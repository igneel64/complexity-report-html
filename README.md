<p align="center">
	<p align="center">Coming soon &#9935;</p>
	<p align="center" style="font-size: 2rem;margin: 0;"></p>
	<h2 align="center">complexity-report-html &#128171;</h3>
	<p><i>Simple interactive graphs that drive change</i></p>
</p>

<hr>
<br>
<div style="text-align:center">
<img src="https://user-images.githubusercontent.com/15251081/78387266-50160a80-75df-11ea-8a24-7e06df1e77e7.png" alt="" style="max-width:75%">
</div>

## Motivation

Either you are counting your first days in a new JavaScript codebase, or you are trying to get a hold of existing tech-debt, surely visualizing it will be of use.

1. Install the library
2. Generate the report and find it under _.complexity_report_
3. Get a bird's eye view of what are the rough spots in the codebase
4. \*It is plain HTML so you can just share this file with anyone that has a browser

## Installation

Use `npm` or `yarn` to install the reporter

```shell
$ npm install --save-dev complexity-report-html
```

## Usage

_\*By default the report runs for all JavaScript files under <project_dir>/src_

Most of the times you want to add the **complexity report**, either as an [npm-script](https://docs.npmjs.com/misc/scripts) or a hook after you commit/push something on your repo using [husky](https://github.com/typicode/husky) 🐶.

```json
{
  "scripts": {
    "reveal-hell": "complexity-report-html",
    "...": "..."
  }
}
```

Or if you prefer `npx` From the root of your repo, just type

```shell
npx complexity-report-html
```

> Now you can see a new folder generated under **.complexity_report** which includes your report file.

### Targeting source folders

If you want to run the report on a different folder, you can use the **generate** command with a relative folder path:

```shell
npx complexity-report-html generate ./directory/to/run
```

## Contributing

For now the best way to contribute is requesting some new features that would make your life easier! Just open a Pull Request and let's discuss.

## License

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

refer to `LICENSE` file in this repository.
