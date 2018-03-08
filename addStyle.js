module.exports = function (content, options) {
  var doc = document;
  var s = doc.createElement('style');
  s.type = 'text/css';
  s.innerHTML = content.toString();
  doc.getElementsByTagName('HEAD')[0].appendChild(s);
}
