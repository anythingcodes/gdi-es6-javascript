# ES6 Transpilation and WebPack Setup

Instructions for setting up Babel to transpile ES6 to a supported format. Part of the activity in the final class of the [Girl Develop It Intro to ES6 course](http://github.com/anythingcodes/gdi-es6-javascript).

## Table of Contents
- [Instructions](#instructions)
	- [Setting up Babel](#setting-up-babel)
	- [Setting up WebPack](#setting-up-webpack)
	- [Setting up ESLint](#setting-up-eslint)
		- [ESLint Setup in Sublime Text](#eslint-setup-in-sublime-text)
- [Troubleshooting](#troubleshooting)

## Instructions

### What You'll Need

1. A text editor. We'll be using [Sublime Text](https://www.sublimetext.com/) for this tutorial -- it may be slightly easier to follow along if you have Sublime, too!
2. Node.js version 6 or above. Be sure Node.js version or higher is installed by opening your command line tool (for example, Terminal, X11, Git Bash, or cmd) and typing `node -v`. If version 6 or above appears, you're good to go!
3. Google Chrome

### Setting up Babel

1. In your command line, create a folder called `gdi-es6` by typing `mkdir gdi-es6`
2. Change directories to this folder by typing `cd gdi-es6`
3. Run `npm init` and press Enter until complete
4. Open your text editor (we'll be using Sublime Text) and mount the `gdi-es6` folder you just created, then create two folders within `gdi-es6`, `src` and `build`. All our ES6 will be written in the `src` folder, where it will then be transpiled to our `build` folder.
```
	gdi-es6
	│
	└───build
	│
	└───src
```
5. Install the babel command line interface: `npm install --save-dev babel-cli`
6. Install the babel ES6 transpiler: `npm install --save-dev babel-preset-es2015`
7. To the `gdi-es6` folder, add a `.babelrc` file containing the following:
```
{
	"presets": ["es2015", "stage-2"]
}
```
8. We're now ready to transpile! Let's add some test files.
9. Within `src`, create a file called `test.js` containing the following:
```
const test = msg => {
	console.log(msg)
};

export default test;
```
10. Within `src`, create a file called `index.js` containing the following:

```
import test from './test';

test('Babel works!');
```
11. Try running `node src/index.js`. You should get an error because `src/index.js` isn't transpiled.

12. Go back to your command line and type `babel src/index.js --watch --out-file build/bundle.js`. (Didn't work? Try the below steps or check the [Troubleshooting](#troubleshooting) section)
	- **Windows**: If `babel src/index.js --watch --out-file build/bundle.js` doesn't work, run `.\node_modules\.bin\babel src/index.js --watch --out-file build/bundle.js`
	- **Mac**: If `babel src/index.js --watch --out-file build/bundle.js` doesn't work, run `./node_modules/.bin/babel src/index.js --watch --out-file build/bundle.js` instead
13. Check your `build` folder to make sure everything is transpiling properly. When you make a change to any file in `src`, it should automatically transpile for you!
14. In the command line, try running `node build/bundle.js`. Note how you won't get an error with the transpiled file!
15. Now that we have a bundled file, we'd like to run that every time we type in `npm start` (the default command for almost every Node project). To do so, open your `package.json` file. Within the `"scripts": {}` object, add a property `"start": "node build/bundle.js"`. When we type `npm start` in the command line, node will run our build file.
16. Go to the command line and run `npm start`. It should output `Babel works!` (or whatever text you put in your `src/index.js` file).

Congrats! Now we can move on to setting up WebPack.

### Setting Up WebPack

We've now got Babel up and running, but typically we'd like to use a build tool such as WebPack, Gulp, or Grunt, since we can use a build tool for a number of other things: transpilation, minification, optimization, processing CSS, running a server, etc. Let's use WebPack.

1. In the command line, navigate to your `gdi-es6` directory if you aren't there already (`cd gdi-es6`).
2. Install WebPack by running `npm install --save-dev webpack`
3. Let's make sure WebPack is working properly. In the command line, type `webpack ./src/index.js ./build/bundle.js` to transpile your `src JS files to `build/bundle.js`. (Didn't work? Try the below steps or check the [Troubleshooting](#troubleshooting) section)
4. Instead of typing in our entry file (`./src/index.js`) and output file (`./build/bundle.js`) each time, let's have WebPack automate that. Create a file called `webpack.config.js` in your `gdi-es6` directory and paste the following:
```
	module.exports = {

		entry: './src/index.js',
		output: {
			path: __dirname + '/build',
			filename: 'bundle.js'
		}

	};
```
5. Now, make a minor change to the text in `src/index.js`, save, and run `webpack` () from the command line. It should build to your bundle.js file. But our result isn't transpiled properly; it's only being bundled into one file.
6. Let's set up transpilation, by installing some WebPack Babel loaders and their dependencies. Run `npm install --save-dev babel-core babel-loader` in the command line.
7. Create an `index.html` file within your `gdi-es6` folder containing the following:
```
<!doctype html>
<html>
	<head>
		<title>GDI ES6 Activity</title>
	</head>
	<body>
		<script type="text/javascript" src="build/bundle.js"></script>
	</body>
</html>
``` 
8. Open your index.html file in Google Chrome. Check the console to see if your message appears.
9. In your command line, run `webpack --watch`. The `--watch` flag will automatically transpile your files. Try changing the message in `src/index.js`, saving, and then refreshing the open `index.html` page in your browser to see the change.
10. One problem with `webpack --watch` is that you have to refresh to see changes. Let's have our changes automatically reload instead using WebPack dev server. Install it by running `npm install --save-dev webpack-dev-server`.
11. Run it with `webpack-dev-server`. (Having trouble? Try `.\node_modules\.bin\webpack-dev-server` on Windows or `./node_modules/.bin/webpack-dev-server` on a Mac)
12. Go to the localhost URL it gives you and add a `/webpack-dev-server` at the end (e.g. `http://localhost:8080/webpack-dev-server`). Click on the `index` file, which is your index.html file.
	- **Note**: Adding `/webpack-dev-server` is important! If you go to the root localhost URL, that won't automatically refresh.
13. Try making some changes to your `src/index.js` file's message. It should automatically update in the browser!

### Setting up ESLint

ESLint helps you and your team abide by a common coding standard, from tabs vs. spaces to using semicolons. You can easily change the rules as your codebase evolves. Although it's installed as a command line tool, you can add it as a tooltip to most IDEs and text editors. Let's set it up!

1. First we need to install ESLint globally (`-g`) on our machine. In your command line, run `npm install -g eslint`.
2. From the command line, within your `gdi-es6` folder, initiate ESLint with `eslint --init`. It will ask you a series of questions about your code style. Let's say yes to ECMAScript 6 features, ES6 modules, browser use, and CommonJS, and pick JSON as our preferred file type. The rest is up to you.
3. A `eslintrc.json` file will be created. Open it to see the style rules.
4. You can now run `eslint *` to see a list of suggestions for all of the code in your `gdi-es6` project.

Helpful, right? But wouldn't it be better to see it in our text editor or IDE? Check out some installation instructions for common editors below.

#### ESLint Setup in Sublime Text

1. Be sure Package Control is installed first, under `Tools` > `Install Package Control...`. (If you don't see that option, you're good to go to step 2.)
2. Go to `Tools` > `Command Palette` and type `install` to select `Package Control: Install Package` from the dropdown
3. Search for `SublimeLinter` and hit Enter to install
4. Search for `SubLinter-contrib-eslint` and hit Enter to install
5. Restart Sublime Text and open your `src/index.js` file. Delete one of the semicolons and save. You should now see a red error message around the missing semicolon!

## Troubleshooting

- If you get the `You have mistakenly installed the babel package, which is a no-op in Babel 6` error message...
	- run `npm uninstall -g babel` and try to run the command again
- If you get a `moduleNameHere is not recognized as an internal or external command` error, first make sure you ran the correct `npm install` command for that module (see instructions). If that doesn't work, you can point to the correct executable by...
	- **Windows**: Replace the command with `.\node_modules\.bin\moduleNameHere`. For example, if I wanted to run a `babel` command, I would type `.\node_modules\.bin\babel` 
	- **Mac**: Replace the command with `./node_modules/.bin/moduleNameHere`. For example, if I wanted to run a `babel` command, I would type `./node_modules/.bin/babel` 
