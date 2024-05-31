---
title: "Search"
date: 2024-01-23T14:23:27+11:00
draft: false
description: "Refine your queries with word, phrase and pattern searches."
---

<br>

> This user guide uses 'portal' to refer to the interface across all of the available {{< glossary_link display="Oni" id="oni" >}} portals (see [Available Portals](/resources/user-guides/portal/available-portals/) for more details).

<br>

##### [Basic Search](#basic-search)
##### [Advanced Search](#advanced-search) ([Search Fields](#search-fields), [Boolean Operators](#boolean-operators), [Query String Syntax](#query-string-syntax), [Regular Expressions](#regular-expressions), [Reserved Characters](#reserved-characters), [Show Query](#show-query))

<br>

The portal has both basic and advanced search capabilities. Search allows you to refine what items are displayed through basic queries with one or more words, or advanced queries using regular expressions to find specific patterns.

<br>

## Basic Search

<br>

The basic search function can be found in the top left section of the portal home page.

<br>

{{< image Src="/user-guides/portal/basic-search.png" Alt="Basic Search" Desc="Basic Search" Title="Basic Search" Ref="LDaCA" >}}
 
<br>

Basic Search allows you to search for:
- single words
- multiple words (i.e. two or more) where at least one of these words occur in the result (e.g. "northern territory" will return results where "northern" and "territory" occur in isolation, as well as any instances where "northern" and "territory" occur in the same item)
- case-insensitivity.


Basic Search does not allow you to search for:
- exact phrases
- parts of words
- case-sensitivity.

<br>

Selecting the magnifying glass icon or hitting Enter/Return on a keyboard executes a Basic Search (but note that the Enter/Return option is not available in Advanced Search). By default, results are sorted by relevance and ordered in descending order. Each result will display a _Relevance Score_ based on the relevance of the result to the search query. If at least one of the query words occurs in the text field of an {{< glossary_link display="object" id="object" >}}, this will be highlighted in yellow; however, highlighting will not occur for matches within {{< glossary_link display="metadata" id="metadata" >}} fields such as name and description.

Note that queries in Basic Search will be applied to all fields in the collections (e.g. name, description, text). If you need to refine the search field, or search for multiple words in specific fields, use the Advanced Search function.

<br>

## Advanced Search

<br>

The advanced search function is accessed by selecting ___Advanced Search___ below the Basic Search bar.

<br>

{{< image Src="/user-guides/portal/advanced-search.png" Alt="Advanced Search" Desc="Advanced Search" Title="Advanced Search" Ref="LDaCA" >}}

<br>

### Search Fields

By default, queries in Advanced Search are applied to all fields, however, this can be refined using the ___All Fields___ dropdown menu on the left. The current search fields available are _Name_, _Description_, _Language_ and _Text_. To search in more than one field, select ___Add New Line___ and specify the additional field you wish to search.

To reset your search query, select ___Clear___.

The information entered in the Advanced Search text field is treated as part of a 'mini-language':

- Your query specifications across multiple lines will be compiled as a single query string consisting of a series of search terms and operators which can be viewed by clicking the ___Show Query___ button.
- In general, the search text is not case-sensitive. Exceptions to this are Boolean operators (see below). 

<br>

### Boolean Operators

The standard Boolean operators `AND`, `OR` and `NOT` are supported in Advanced Search. These can either be added in the dropdown menu between fields when ___Add New Line___ is selected, or included within the search text field, using parentheses whenever multiple operators occur together.

For instance, to search for items that contain both 'rainbow' and 'lorikeet' or 'pink' and 'cockatoo' but not 'galah', the query should be:

`((rainbow AND lorikeet) OR (pink AND cockatoo)) NOT galah`

To search for the literal words AND, OR and NOT, add a backward slash (\\) before that word to 'escape' it, e.g. `\OR`. Note that this is a situation where the search text is case-sensitive; 'and' does not need to be escaped, but 'AND' does. Escaping will not return case-sensitive matches; it will just prevent its use as a Boolean operator.

<br>

### Query String Syntax

Symbol | Function
--- | ---
" " | Use double quotation marks before and after a phrase to search for that exact phrase, e.g. `"public house"`. Entries where a hyphen occurs in the text instead of a space will also be returned in a phrasal search.
^ | Boost operator that makes one term more relevant than another, e.g. `quick^2 fox` to increase the relevance of 'quick' or `quick^0.5 fox` to reduce it. The default boost value is 1, but can be any positive floating point number. Boosts between 0 and 1 reduce relevance.
~ | Creates a fuzzy query to return results similar to the search term by changing, removing, inserting or transposing one or more characters. Add a number following this operator to increase the number of variations, e.g. `brwn~2` will find instances of 'brown', 'been', 'own', etc.<br>Fuzzy queries can also be applied to phrasal searches, allowing the specified words to be further apart or in a different order, e.g. `"house home"~3` will find instances of 'house and home', 'house is my home', 'home, the house', etc.
? | Wildcard to replace a single character. Wildcards cannot be included in a phrasal search. e.g. `qu?ck` will find instances of 'quick' and 'quack'.
\* | Wildcard to replace zero or more characters. Wildcards cannot be included in a phrasal search. e.g. `gre*` will find instances of 'green', 'grew', 'greater', etc. This wildcard can also be used to find related word forms e.g. `ask*` will find instances of 'ask', 'asks', 'asked' and 'asking'.
( ) | Defines a sub-expression.

<br>

### Regular Expressions

Some regular expression patterns can be used within the query string by surrounding the pattern in forward slashes, e.g. `/gr[ae]y/` or `/honou*r/`. Currently, regular expressions can only be used for complete word searches and not for partial words or phrases. This search function does not support full Perl-compatible regex syntax. For more information see: [RegExp Syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/regexp-syntax.html).

<br>

### Reserved Characters

The following are reserved characters (i.e. part of the 'mini-language') that can have specific search functions and may need 'escaping' with \ if you want to search for the literal characters.

`+ − = && ; || > < ! ( ) { } [ ] ^ " ~ * ? : \ /`

<br>

### Show Query

If you need to check your search query against what it actually sent to the back-end search engine, select ___Show Query___.

For example, setting the search field to _Language_ and searching for `Danish` has the following query string:

`( language.name.@value: Danish )`

<br>