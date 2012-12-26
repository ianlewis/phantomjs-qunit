/*jslint sloppy: true, vars: true, white: true, nomen: true, browser: true  */
/*global module, test, ok, equal */

module("mymodule");

test("Equal Test", function() {
    ok(true, "ok() check");
    equal("Test", "Test", "equal() check");
    ok(false, "Failed Test");
    // ok(true, "Passed Test");
});

test("OK Test", function() {
    ok(true, "ok() check");
});

module("othermodule");

test("OK Test", function() {
    ok(true, "ok() check");
});
