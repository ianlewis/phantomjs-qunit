/*jslint sloppy: true, vars: true, white: true, nomen: true, browser: true  */
/*global module, test, ok, equal */

module("mymodule");


test("MyModule Test", function() {
    ok(true, "ok() check");
    equal("Test", "Test", "equals() check");
    ok(false, "Failed Test");
});
