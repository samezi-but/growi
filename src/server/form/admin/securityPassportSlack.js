'use strict';

var form = require('express-form')
  , field = form.field
  ;

module.exports = form(
  field('settingForm[security:passport-slack:isEnabled]').trim().toBooleanStrict().required(),
  field('settingForm[security:passport-slack:consumerKey]').trim(),
  field('settingForm[security:passport-slack:consumerSecret]').trim(),
  field('settingForm[security:passport-slack:isSameUsernameTreatedAsIdenticalUser]').trim().toBooleanStrict(),
);
