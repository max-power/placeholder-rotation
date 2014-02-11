Placeholder Rotation
====================

    new PlaceholderRotation(document.getElementById('search'), {
      template: 'Are you looking for {term}?',
      terms: ['Ruby', 'Python', 'Scala', 'Go', 'Smalltalk'],
      delay: 250
    })
    
or use HTML5 Data Attributes:
    

    <input id="s" type="text" data-terms="madness,insanity,frenzy,lunacy,craziness" data-delay="1000">
    <script>
      new PlaceholderRotation(document.getElementById('s'))   
    </script>

You can use the following attributes:

- `terms`: Array, default: `["something"]`
- `template`: String, default: `"Search for {term}"`
- `delay`: Integer (milliseconds), default: `1000`
- `index`: Integer, default: `0`
