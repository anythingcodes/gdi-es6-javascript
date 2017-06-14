# Getting Started with ES6 and ES7 JavaScript

Materials and slides for a Girl Develop It ES6 JavaScript course. Includes ES7's minor additions.

[View Slides](http://anything.codes/gdi-es6-javascript) | [View Meetup Description](resources/meetup-description.md)

### Got a pull request?

Pull requests are encouraged. Do your part to help us keep this curriculum up-to-date and relevant!

### Table of Contents
1. [Details for Course Organizers](#details-for-course-organizers)
    1. [Meetup Content](#meetup-content)
2. [Details for Instructors](#details-for-instructors)
    1. [Compiling Slides and Running Locally](#compiling-slides-and-running-locally)
    2. [Teaching Recommendations](#teaching-recommendations)
    3. [Instructor Notes](#instructor-notes)
    4. [How to Use Reveal.js Slides](#how-to-use-revealjs-slides)


---


## Details for Course Organizers

| Slides | Hours | Format | Content Creator | Additional Notes |
| ----- |:-----:| -----:| -----:| -----:|
| [View](http://anything.codes/gdi-es6-javascript) | 8 | Four 2-hour classes | [@anythingcodes](http://github.com/anythingcodes) | Print cheatsheets for each class — PDFs can be found in the [`/resources/cheatsheets`](/resources/cheatsheets) directory. Originally run for GDI Boston. |


##### Meetup Content

| Title | Suggested Cost | Suggested # of TAs | Meetup Description | Example URLs |
| ----- |:-----:| -----:| -----:| -----:| 
| Getting Started with ES6 JavaScript | $90/student | 2 (potentially 3 for final class activity) |  [View](resources/meetup-description.md) | [View](https://www.meetup.com/Girl-Develop-It-Boston/events/239315429/) |

---

## Details for Instructors

### Compiling Slides and Running Locally

1. Install [Node.js](https://nodejs.org) (v6)
2. Run `npm install` from this repository's directory
3. Run `gem install sass` to install Sass. Note: You will need to [download Ruby](https://www.ruby-lang.org/en/documentation/installation) to run this `gem` command.
4. Run `grunt` from this repository's directory to compile files. A window will open with the slides running locally. Any changes will automatically refresh.

Make CSS changes to the source files, **not** the compiled CSS files (i.e. **not** those in `/dist`). Source files can be found in `/src/css` as `.scss` files.

### Teaching Tips and Recommendations

- Slide-specific notes can be found in presenter mode. To enter presenter mode, press the `S` key when viewing the slides in a browser.
- All CodePen solutions have a class of `solution solution__lesson-X` where X is the lesson number (1, 2, or 3) and are hidden from the slides by default. When you're ready to reveal solutions for a given class, uncomment out `display: inline;` in the `src/css/theme/source/gdidarkblue.scss` file. Typically solutions are revealed after each lesson ends.

### How to Use Reveal.js Slides

**Key Functions:**
- Enter speaker view by pressing `s`
- View PDF/print mode by going to `http://yourslidesurl/?print-pdf` 

**Additional Info:**

Please read our slide creation guidelines in [the wiki](https://github.com/girldevelopit/gdi-slides-template/wiki). Be sure to make your course's content as reusable as possible &mdash; remove any information about yourself or your chapter.






