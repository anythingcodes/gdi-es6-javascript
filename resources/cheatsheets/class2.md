# Class 2 Cheatsheet

## Arrow Functions

```const getMessage = name => `Hello ${name}!`;```

To make an arrow function:

- Remove the word function
- Place a fat arrow (`=>`) after parameters
- If there's only one parameter, remove the surrounding parentheses `()`
- If there's only one expression in the function body, remove `{ }`, `return`, and the semicolon (`;`) after the object you're returning.

Features of arrow functions:

- In arrow functions, the value of `this` is lexically fetched from the scope the arrow function sits inside

## Array Helpers

Each array helper has an iterator function, which has the parameters of `element`, `index`, and the `array` itself (`reduce()`'s iterator function has an extra first parameter, `initialValue`). Only use the parameters you need.

<table>
    <tbody>
        <tr>
            <th>Array Helper</th>
            <th>Use it to...</th>
            <th>Returns</th>
        </tr>
        <tr>
            <td><code class="javascript">arr.forEach((element, index, array) =&gt; { });</code></td>
            <td>loop through elements in an array</td>
            <td><code>undefined</code></td>
        </tr>
        <tr>
            <td><code class="javascript">arr.every((element, index, array) =&gt; { });</code></td>
            <td>check if <span class="blue">every</span> element passes a test</td> 
            <td><code>true||false</code></td>
        </tr>
        <tr>
            <td><code class="javascript">arr.some((element, index, array) =&gt; { });</code></td>
            <td>check if <span class="blue">some</span> (at least 1) <code>arr</code> elements pass a test</td>
            <td><code>true||false</code></td>
        </tr>
        <tr>
            <td><code class="javascript">arr.filter((element, index, array) =&gt; { });</code></td>
            <td>create a new array by <span class="blue">filtering</span> the original array elements</td>
            <td><code>Array</code></td>
        </tr>
        <tr>
            <td><code class="javascript">arr.map((element, index, array) =&gt; { });</code></td>
            <td>create a new array by <span class="blue">modifying</span> the original array elements</td>
            <td><code>Array</code></td>
        </tr>
        <tr>
            <td><code class="javascript">arr.find((element, index, array) =&gt; { });</code></td>
            <td>find the <span class="blue">first element that passes a test</span></td>
            <td>1 element</td>
        </tr>
        <tr>
            <td><code class="javascript">arr.findIndex((element, index, array) =&gt; { });</code></td>
            <td>find the <span class="blue">index of the first element that passes a test</span></td>
            <td>1 element</td>
        </tr>
        <tr>
            <td><code class="javascript">arr.reduce((calculatedValue, element, index, array) =&gt; { }, initialValue);</code></td>
            <td>pass in an <code>initialValue</code> and modify it according to the current <code>element</code> value</td>
            <td>1 reduced value</td>
        </tr>
    </tbody>
</table>
            
## Methods for Altering Arrays
            
<table>
    <tbody>
        <tr>
            <th>Array Method</th>
            <th>Use it to...</th>
            <th>Returns</th>
        </tr>
        <tr>
            <td><code class="javascript">arr.fill((value, startIndex, endIndex) =&gt; { });</code></td>
            <td>fill all the elements of an array from start index to end index with <code>value</code></td>
            <td>the modified array</td>
        </tr>
        <tr>
            <td><code class="javascript">arr.copyWithin((targetIndex, startIndex, endIndex) =&gt; { });</code></td>
            <td>copy part of an array to another location in the same array</td>
            <td>the modified array</td>
        </tr>
    </tbody>
 </table>