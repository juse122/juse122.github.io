# Code Anatomy Cheat Sheet

##### Contents
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)

---

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
    property: property value;   || (= declaration)
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

#### Attribute selector types
| Format | Description |
|:-|:-|
| [attr] | Represents elements with an attribute name of attr. |
| [attr=value] | Represents elements with an attribute name of attr whose value is exactly value. |
| [attr~=value] | Represents elements with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value. |
| [attr\|=value] | Represents elements with an attribute name of attr whose value can be exactly value or can begin with value immediately followed by a hyphen, - (U+002D). |
| [attr^=value] | Represents elements with an attribute name of attr whose value is prefixed (preceded) by value. |
| [attr$=value] | Represents elements with an attribute name of attr whose value is suffixed (followed) by value. |
| [attr*=value] | Represents elements with an attribute name of attr whose value contains at least one occurrence of value within the string. |

<br />

#### Combinator types
| Combinator name | Format | Description |
|:-|:-|:-|
| Adjacent sibling combinator | selector&#160;+&#160;selector | Matches the second element only if it immediately follows the first element, and both are children of the same parent element. |
| Child combinator | selector&#160;>&#160;selector | Matches only those elements matched by the second selector that are the direct children of elements matched by the first. |
| Descendant combinator | selector&#160;selector | Elements matched by the second selector are selected if they have an ancestor element matching the first selector. |
| General sibling combinator | selector&#160;~&#160;selector | Matches all iterations of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent element. |

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
