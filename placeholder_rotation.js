var PlaceholderRotation = function(el, options) {
  if (el.tagName != 'INPUT' || !('placeholder' in el)) return false
  this.el = el
  this.setup(el.dataset, options || {})
  this.place().toggle()
  this.el.addEventListener('change', this.toggle.bind(this))
}

PlaceholderRotation.prototype.setup = function(data, opts) {
  this.index    = data.index    || opts.index    || 0
  this.delay    = data.delay    || opts.delay    || 1000
  this.template = data.template || opts.template || "Search for {term}"
  this.terms    = (data.terms && data.terms.split(/\s*,\s*/)) || opts.terms || ['something']
}

PlaceholderRotation.prototype.toggle = function() {
  return this[''==this.el.value?'start':'stop']()
}

PlaceholderRotation.prototype.start = function() {
  this.tick||(this.tick = setInterval(this.place.bind(this), this.delay))
  return this
}

PlaceholderRotation.prototype.stop = function() {
  this.tick = clearInterval(this.tick)
  return this
}

PlaceholderRotation.prototype.place = function() {
  this.el.setAttribute('placeholder', this.template.replace('{term}', this.terms[this.index]))
  this.index=(this.index+1)%this.terms.length
  return this
}
