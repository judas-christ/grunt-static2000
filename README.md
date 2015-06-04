# grunt-static2000

> Grunt plugin for [Static2000](https://github.com/judas-christ/static2000)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-static2000 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-static2000');
```

## The "static2000" task

### Overview
In your project's Gruntfile, add a section named `static2000` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  static2000: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      options: {
        // Target-specific options go here.
      }
    },
  },
});
```

### Options

#### options.templateAdapter
Type: `String`
Default value: `'jade'`

The template adapter to use. Available options are `'jade'` and `'nunjucks'`. The template adapters are installed together with grunt-static2000.

#### options.templates
Type: `String`
Default value: `'src/templates'`

Path to the templates.

#### options.content
Type: `String`
Default value: `'src/content'`

Path to content.

#### options.dest
Type: `String`
Default value: `'www'`

Path to generated html.

#### options.baseUrl
Type: `String`

Base URL for the site. Must be supplied for a sitemap to be generated. Without this option, no sitemap will be generated.


### Usage Examples

#### Default Options
In this example, the content in `src/content` and the templates in `src/templates` are combined and rendered using the `jade` adapter and the resulting html files and sitemap are output to `www`.

```js
grunt.initConfig({
  static2000: {
    options: {
      baseUrl: 'http://www.example.com'
    }
  }
});
```

#### Custom Options

```js
grunt.initConfig({
  static2000: {
    options: {
      templateAdapter: 'nunjucks',
      templates: 'app/templates',
      content: 'app/content',
      dest: 'temp',
      baseUrl: 'http://www.example.com/app'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### Version 0.2.1

Using latest version of Static2000. Template adapters are now included.

### Version 0.2.0

Fixed bug where output files were not written.

### Version 0.1.0

First release.
