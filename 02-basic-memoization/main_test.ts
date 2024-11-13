import { assertEquals } from "@std/assert";
import { memo } from "./main.ts";

Deno.test(function testMemoization() {
  assertEquals(memo(9), "calculated");
  assertEquals(memo(9), "cached");
});
