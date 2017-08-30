# mobile-menu
Simple mobile menu example with HTML, CSS and vanilla javascript

### Run the example

`npm install`

`gulp serve`

Browser opens automatically 

### Main idea

We want to show same items in both mobile and desktop environments.
This can be achieved with CSS media queries to serve different classes
depending on the resolution.

In mobile resolution we will show classic _"hamburger"_ menu and on desktop same
items are shown as flex items side by side.

Mobile menu is toggleable and it show menu item list when pressed and
hides them when pressed again. Whole javascript used is like:

```
    <script>
       var id = document.getElementById('mobmenu');
       id.addEventListener('click', function () {
         var menu = document.getElementById('mm-container');
         menu.classList.toggle("menu-visible");
       });
    </script>
```

Traditionally mobile menu is done with list items (LI) but I wanted to
do similar thing with divs.


&copy; 2017 Janne Hämäläinen. Released under [MIT](https://opensource.org/licenses/MIT) license.  


