Package.describe({
  name: 'flowsoft:ntp-client',
  version: '0.5.3_2',
  // Brief, one-line summary of the package.
  summary: 'Package for ntp-client node package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Flowsoft/meteor-ntp-client',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'ntp-client': '0.5.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('ntp-client.js', 'server');
  api.export('ntpClient');
});
