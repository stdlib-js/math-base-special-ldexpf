<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ldexpf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply a [single-precision floating-point number][ieee754] by an integer power of two.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-ldexpf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ldexpf = require( '@stdlib/math-base-special-ldexpf' );
```

#### ldexpf( frac, exp )

Multiplies a [single-precision floating-point number][ieee754] by an `integer` power of two (i.e., `x = frac * 2^exp`).

```javascript
var x = ldexpf( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0

x = ldexpf( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
// returns 1.0
```

If `frac` equals positive or negative zero, `NaN`, or positive or negative `infinity`, the function returns a value equal to `frac`.

```javascript
var x = ldexpf( 0.0, 20 );
// returns 0.0

x = ldexpf( -0.0, 39 );
// returns -0.0

x = ldexpf( NaN, -101 );
// returns NaN

x = ldexpf( Infinity, 11 );
// returns Infinity

x = ldexpf( -Infinity, -118 );
// returns -Infinity
```

<section class="usage">

<section class="notes">

## Notes

// TODO: update this once we have `frexpf`.

-   This function is the inverse of [`frexp`][@stdlib/math/base/special/frexp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var ldexpf = require( '@stdlib/math-base-special-ldexpf' );

var frac = linspace( 0.0, 100.0, 10 );
var exp = discreteUniform( 100, 0, 10 );

var i;
for ( i = 0; i < frac.length; i++ ) {
    console.log( 'ldexpf(%d,%d) = %d', frac[ i ], exp[ i ], ldexpf( frac[ i ], exp[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/ldexpf.h"
```

#### stdlib_base_ldexpf( frac, exp )

Multiplies a [single-precision floating-point number][ieee754] by an integer power of two (i.e., `x = frac * 2^exp`).

```c
float x = stdlib_base_ldexpf( 0.5f, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0f
```

The function accepts the following arguments:

-   **frac**: `[in] float` input value.
-   **exp**: `[in] int32_t` integer power of two.

```c
float stdlib_base_ldexpf( const float frac, const int32_t exp );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/ldexpf.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    float y;
    int i;

    const float frac[] = { 0.5f, 5.0f, 0.0f, 3.5f, 7.9f };
    const int32_t exp[] = { 3, -2, 20, 39, 14 };

    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_ldexpf( frac[ i ], exp[ i ] );
        printf( "ldexpf(%f, %d) = %f\n", frac[ i ], exp[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-ldexpf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-ldexpf

[test-image]: https://github.com/stdlib-js/math-base-special-ldexpf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-ldexpf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-ldexpf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-ldexpf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-ldexpf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-ldexpf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-ldexpf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-ldexpf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-ldexpf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-ldexpf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-ldexpf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-ldexpf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-ldexpf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-ldexpf/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985
[@stdlib/math/base/special/frexp]: https://github.com/stdlib-js/math-base-special-frexp

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
