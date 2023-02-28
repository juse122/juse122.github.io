# Code Anatomy Cheat Sheet

##### Contents
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)

---

<br />

## HTML
```
element =
----------
<opening-tag attribute="value"> content </closing-tag>


<void-element />


<!-- comment -->
```

<br />

## CSS
```
ruleset =
----------
selector {
    property: property value;
    
    --> = declaration
}


/* comment */
```

<br />

#### Selector types
| Selector name | Format |
|:-|:-|
| Element selector | element |
| ID selector | #id |
| Class selector | .class |
| Attribute selector | element[attribute] |
| Pseudo-class selector | (element/id/class):pseudo-class |

<br />

#### Combinator types
| Combinator name | Format | Description |
|:-|:-|:-|
| Adjacent sibling combinator | selector + selector | Matches the second element only if it immediately follows the first element, and both are children of the same parent element. |
| Child combinator | selector > selector | Matches only those elements matched by the second selector that are the direct children of elements matched by the first. |
| Descendant combinator | selector selector | Elements matched by the second selector are selected if they have an ancestor element matching the first selector. |
| General sibling combinator | selector ~ selector | Matches all iterations of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent element. |

<br />

## JavaScript
```
executing a function =
----------
functionName(arguments);


declaring a function =
----------
function functionName(parameters) {
    block-of-code
}


// single line comment
/* multi line comment */
```

data types, operators, conditionals, functions, events

<br />

#### Variable types
| Name | Description |
|:-|:-|
| var | x |
| let | x |
| const | x |
