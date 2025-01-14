Package.describe({
  name: 'didericis:permissions-mixin',
  version: '2.0.0',
  summary:
    'mdg:validated-method mixin for declaratively defining method permissions based on roles',
  git: 'https://github.com/didericis/permissions-mixin.git',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'check']);
  api.use('alanning:roles@2.0.0');
  api.use('mdg:validated-method@1.1.0');
  api.addFiles('permissions-mixin.js');
  api.export('PermissionsMixin');
});

Package.onTest(function (api) {
  api.use([
    'ecmascript',
    'accounts-password',
    'alanning:roles@2.0.0',
    'practicalmeteor:mocha@2.1.0_5',
    'practicalmeteor:chai@2.1.0_1',
    'aldeed:simple-schema@1.4.0',
    'mdg:validated-method@1.0.2',
    'mongo',
    'didericis:permissions-mixin',
  ]);

  api.addFiles('permissions-mixin-tests.js');
});
