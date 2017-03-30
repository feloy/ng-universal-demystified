const ngtools = require('@ngtools/webpack');

module.exports = {
    entry: {
	main: './src/main.server.ts'
    },
    resolve: {
	extensions: ['.ts', '.js']
    },
    target: 'node',
    output: {
	path: 'dist',
	filename: '[name].js'
    },
    plugins: [
	new ngtools.AotPlugin({
	    tsConfigPath: './tsconfig.json',
	})
    ],
    module: {
	rules: [
	    {
		test: /\.ts$/,
		loaders: ['@ngtools/webpack', 'angular2-template-loader'],
	    },
	    {
		test: /\.(html|css)$/,
		loader: 'raw-loader'
	    }
	]
    }
}
