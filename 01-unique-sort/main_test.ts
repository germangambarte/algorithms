import { assertEquals } from "@std/assert";
import { uniqSort } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(uniqSort([1, 5, 2, 1]), [1, 2, 5]);
  assertEquals(uniqSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);
});
