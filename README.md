* Explanations for each functionality (like logic) in Components section. 
# TOC
## Information
### Used Plugins
## Styles 
### class Attribute Naming
### File
### Font Family
### Font Size
#### By roles
#### By class 
### Properties
### Spacing 

## Components
### Block
### Elements
#### faq__accordion


# ------------------------------
# Information
## Used Plugins
: Emerging animaiton = AOS.js
: Slider = 

# Styles
## class Attribute Naming
: BEM
Flexbox
: SECTION-NAME__flex-container
: SECTION-NAME__flex-item

## Files
style.css
= For COMMUNAL styles.

COMPONENT.css
= For each page components.
## Font Family
Google Font/Noto Sans JP
  Ref: https://fonts.google.com/specimen/Noto+Sans+JP?query=Noto+sans+jp&preview.text=%E4%BC%9A%E3%81%86%E6%97%A5%E3%83%92%E3%83%92&preview.text_type=custom#standard-styles

## Font Size
* In the 1440px screens.
### By roles
Base = 14px

Titles
  * Drop by 6px;
  Biggest = 32px
  Middle = 28px;
  Small = 24px;

### By class 
.section-title
  = For ALL the titles in FIVE big sections. ()
  : font-size: 24px:
  
  .section-title__sub
  = For ALL the sub titles UNDER the section titles. 
  : font-size: 12px;


.feature-title
  : 18px;

## Properties
box-shadow
  : 0 4px 4px hsl(0, 0%, 70%);
  faq section
border
  : 1px solid hsl(0, 0%, 70%); 
  : 1px solid hsl(0, 0%, 90%); 

border-radius
  : 8px;

z-index
.header
  : 100;     
.top__item
  : 10

## Spacing 
Inside a section
  margin-top
    : 48px
    : 24px

# Components
## Blocks
Button
  <div class="button">
    What it is
    : Has the styling for all three buttons. 

## Elements

### faq__accordion 
: Listen to the .faq__accordion-question Click Event
-> Get it's href Attribute (has the class name to open the accordion).
-> Get the accordion to open (One of .faq__accordion-answer) with the class Name. 
--> Change the height. 