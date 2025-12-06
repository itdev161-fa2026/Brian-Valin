Brian Valin

- Added Darkmode Toggle
    - Created button in index.html
    - Imported icons from fonts.google
    - Replaced every color callout in all css files with variables
    - variables are defined in darkmode.css
    - .darkmode in darkmode.css contains new color values for variables that will be changed in dark mode
    - Code added to darkmode.css to format the darkmode button and switch the symbol as the mode changes

- Added Relative Dates using Date-fns
    - Code replaced in PostCard.jsx
        - Added relative date using Date-fns formatDistance function
        - Original date format function replaced with Date-fns format function
        - In PostCard.css set this element to hidden
        - On hover, relative date is hidden and full date is displayed
    - code replaced in PostDetail.jsx
        - Original date format function replaced with Date-fns format function