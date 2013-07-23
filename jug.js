/**@license
 * jug | v0.1.0
 * Author: Sean Dunn | MIT License
 */
define(['swig', 'text'], function(swig, text) {
  function load(name, req, onLoad, config) {
    text.get(req.toUrl(name + '.html'), function (data) {
      var template = swig.compile(data, {filename: name}),
          render = function() {
            return template.apply(template, arguments);
          };
      console.log(swig);

      render.template = template;

      onLoad(render);
    });
  }

  function write(pluginName, moduleName, writeModule) {}

  return {
    load: load,
    write: write
  };
});
